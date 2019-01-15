import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ajaxStatusActions from '../../actions/ajaxStatusActions'
import { UserRoles as userRoles } from '../../constants/userConstants'
import MyProfile from './myProfile'
import * as staffActions from '../../actions/staffActions'
import * as handleStaff from '../../components/handleStaff'

class Staff extends Component {
    constructor(props) {
        super(props)

        const {
            match: { params }
        } = props

        const email = params.email

        this.state = {
            loaded: false,
            email: email,
            staff: null,
            disabled: false
        }
    }

    async componentWillMount() {
        const manager = this.props.user.roles.includes(userRoles.Manager)

        if (manager === true && this.state.email) {
            const staff = await this.props.staffActions.getStaffFromEmail(this.state.email)
            const resignHistory = await this.props.staffActions.getStaffFromEmail(this.state.email)

            this.setState({ staff, resignHistory, disabled: true, loaded: true })
        } else {
            const staff = await this.props.staffActions.getStaff()
            const resignHistory = await this.props.staffActions.getResignHistory()

            this.setState({ staff, resignHistory, loaded: true })
        }
    }

    render() {
        if (this.state.loaded === false) {
            return null
        }

        return (
            <div>
                <MyProfile
                    disabled={this.state.disabled}
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
        sourceMarkets: state.geography.sourceMarkets,
        jobTitles: state.geography.jobTitles,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ajaxStatusActions: bindActionCreators(ajaxStatusActions, dispatch),
        staffActions: bindActionCreators(staffActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Staff)
