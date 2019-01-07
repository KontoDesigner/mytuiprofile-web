import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ajaxStatusActions from '../../actions/ajaxStatusActions'
import { UserRoles as userRoles } from '../../constants/userConstants'
import { Row, Col } from 'reactstrap'

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
        }

        if (this.state.staff === null) {
            return <div>Could not find staff</div>
        }

        return (
            <div>
                <Row>
                    <Col xl="12" lg="12" md="12" sm="12" xs="12" style={{ marginTop: '15px' }}>
                        <div className="hr">
                            <span className="hr-title">My Profile</span>
                        </div>
                    </Col>
                </Row>
                Hello staff ({this.state.email})!
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
        ajaxStatusActions: bindActionCreators(ajaxStatusActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Staff)