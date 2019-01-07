import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as managerActions from '../../actions/managerActions'
import ManageStaff from './manageStaff'
import MyProfile from './myProfile'

class Manager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            selectedDestination: null,
            selectedStaff: null
        }
    }

    async componentWillMount() {
        await this.props.managerActions.getStaffs(null)

        this.setState({ loaded: true })
    }

    destinationOnChange = async destination => {
        const selectedDestination = destination != null ? destination.value : null

        this.setState({ selectedDestination, selectedStaff: null })
    }

    staffOnChange = staff => {
        const selectedStaff = staff != null ? staff.value : null

        this.setState({ selectedStaff })

        const win = window.open(`/staff/${selectedStaff}`, '_blank')

        win.focus()
    }

    render() {
        if (this.state.loaded === false) {
            return null
        }

        const staffs =
            this.state.selectedDestination !== null
                ? this.props.staffs.filter(s => s.destination === this.state.selectedDestination)
                : this.props.staffs

        return (
            <div>
                <ManageStaff
                    staffs={staffs}
                    destinations={this.props.destinations}
                    destinationOnChange={this.destinationOnChange}
                    staffOnChange={this.staffOnChange}
                    selectedDestination={this.state.selectedDestination}
                    selectedStaff={this.state.selectedStaff}
                />

                <MyProfile />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        destinations: state.geography.destinations,
        staffs: state.manager.staffs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        managerActions: bindActionCreators(managerActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Manager)
