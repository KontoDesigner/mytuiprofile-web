import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ajaxStatusActions from '../../actions/ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { UserRoles as userRoles } from '../../constants/userConstants'

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

        if (manager === true && this.state.email) {
            this.getStaff(this.state.email)
        } else {
            this.getStaff(this.props.user.email)
        }
    }

    getStaff = async email => {
        //todo - fix api
        // // // // this.props.ajaxStatusActions.beginAjaxCall()

        // // // // const staff = await RestClient.get(`staff/${email}`)

        // // // // this.props.ajaxStatusActions.endAjaxCall()

        // // // // this.setState({ staff, loaded: true })

        this.setState({ staff: {}, loaded: true, email })
    }

    render() {
        if (this.state.loaded === false) {
            return null
        } else if (this.state.staff === null) {
            return <div>Could not find staff</div>
        } else {
            return <div>Hello staff ({this.state.email})!</div>
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ajaxStatusActions: bindActionCreators(ajaxStatusActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Staff)
