import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as staffActions from '../../actions/staffActions'
import ManageStaff from './manageStaff'
import Staff from '../staff/staff'

class Manager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            staffs: [],
            staff: null,
            loaded: false,
            selectedDestination: null,
            selectedStaff: null,
            positionAssigns: null
        }
    }

    async componentWillMount() {
        const staff = await this.props.staffActions.getStaff()
        const resignHistory = await this.props.staffActions.getResignHistory()
        const positionAssigns = await this.props.staffActions.getPositionAssigns()

        this.setState({ staff, resignHistory, positionAssigns, loaded: true })
    }

    destinationOnChange = async destination => {
        const selectedDestination = destination != null ? destination.value : null

        let staffs = []

        if (selectedDestination !== null) {
            staffs = await this.props.staffActions.getStaffs(selectedDestination)
        }

        this.setState({ selectedDestination, selectedStaff: null, staffs })
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

        return (
            <div>
                <ManageStaff
                    staffs={this.state.staffs}
                    destinations={this.props.destinations}
                    destinationOnChange={this.destinationOnChange}
                    staffOnChange={this.staffOnChange}
                    selectedDestination={this.state.selectedDestination}
                    selectedStaff={this.state.selectedStaff}
                    f2wUrl={this.props.f2wUrl}
                />

                <Staff />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        destinations: state.geography.destinations,
        f2wUrl: state.geography.f2wUrl
    }
}

function mapDispatchToProps(dispatch) {
    return {
        staffActions: bindActionCreators(staffActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Manager)
