import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ajaxStatusActions from '../../actions/ajaxStatusActions'
import { UserRoles as userRoles } from '../../constants/userConstants'
import MyProfile from './myProfile'
import * as staffActions from '../../actions/staffActions'

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
            staff: null
        }
    }

    async componentWillMount() {
        const manager = this.props.user.roles.includes(userRoles.Manager)

        if (manager === false && this.state.email) {
            const staff = await this.props.staffActions.getStaffFromEmail(this.state.email)

            this.setState({ staff: staff, loaded: true })
        } else {
            const staff = await this.props.staffActions.getStaff()

            this.setState({ staff: staff, loaded: true })
        }
    }

    render() {
        if (this.state.loaded === false) {
            return null
        }

        return (
            <div>
                <MyProfile staff={this.state.staff} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
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
