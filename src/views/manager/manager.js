import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as managerActions from '../../actions/managerActions'
import ManageStaff from './manageStaff'
import MyProfile from '../staff/myProfile'
import * as handleStaff from '../../components/handleStaff'

class Manager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            staffs: null,
            staff: null,
            loaded: false,
            selectedDestination: null,
            selectedStaff: null
        }
    }

    async componentWillMount() {
        const staff = await this.props.managerActions.getStaff()
        const resignHistory = await this.props.managerActions.getResignHistory()

        this.setState({ staff, resignHistory, loaded: true })
    }

    destinationOnChange = async destination => {
        const selectedDestination = destination != null ? destination.value : null

        let staffs = null

        if (selectedDestination !== null) {
            staffs = await this.props.managerActions.getStaffs(selectedDestination)
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
                />

                <MyProfile
                    disabled={false}
                    staff={this.state.staff}
                    resignHistory={this.state.resignHistory}
                    jobTitles={this.props.jobTitles}
                    sourceMarkets={this.props.sourceMarkets}
                    handleStaffField={(e, _this) => handleStaff.handleStaffField(e, this)}
                    handleStaffSelect={(field, val, selector, _this) => handleStaff.handleStaffSelect(field, val, selector, this)}
                    handleStaffDatePicker={(field, date, _this) => handleStaff.handleStaffDatePicker(field, date, this)}
                    handleResignHistoryField={(e, _this) => handleStaff.handleResignHistoryField(e, this)}
                    handleResignHistorySelect={(field, val, selector, _this) => handleStaff.handleResignHistorySelect(field, val, selector, this)}
                    handleResignHistoryDatePicker={(field, date, _this) => handleStaff.handleResignHistoryDatePicker(field, date, this)}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        destinations: state.geography.destinations,
        sourceMarkets: state.geography.sourceMarkets,
        jobTitles: state.geography.jobTitles,
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
