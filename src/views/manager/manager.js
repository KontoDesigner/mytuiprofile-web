import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import Select from 'react-select'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as managerActions from '../../actions/managerActions'

class Manager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            staffs: [],
            selectedDestination: null,
            selectedStaff: null
        }
    }

    async componentWillMount() {
        const _this = this

        return Promise.all([this.props.managerActions.getStaffs(null)]).then(function(res) {
            _this.setState({ loaded: true, staffs: res[0] })
        })
    }

    destinationOnChange = async destination => {
        const selectedDestination = destination != null ? destination.value : null

        const staffs = await this.props.managerActions.getStaffs(selectedDestination)

        this.setState({ selectedDestination, staffs })
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
                <Row>
                    <Col xl="12" lg="12" md="12" sm="12" xs="12" style={{ marginTop: '15px' }}>
                        <div className="hr">
                            <span className="hr-title">Manage Staff</span>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6" md="6" lg="6" xl="6">
                        <div className="form-group form-group-select">
                            <label htmlFor="staff">Destination</label>

                            <Select
                                id="destination"
                                valueKey="value"
                                labelKey="label"
                                className="form-control"
                                options={this.props.destinations}
                                onChange={this.destinationOnChange}
                                value={this.state.selectedDestination}
                                placeholder="Select.."
                            />
                        </div>
                    </Col>

                    <Col sm="6" md="6" lg="6" xl="6">
                        <div className="form-group form-group-select">
                            <label htmlFor="staff">Staff</label>

                            <Select
                                id="staff"
                                valueKey="value"
                                labelKey="label"
                                className="form-control"
                                options={this.state.staffs}
                                onChange={this.staffOnChange}
                                value={this.state.selectedStaff}
                                placeholder="Select.."
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xl="12" lg="12" md="12" sm="12" xs="12" style={{ marginTop: '-10px', marginBottom: '5px' }}>
                        <div className="hr">
                            <span className="hr-title">My Profile</span>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm="12" md="12" lg="12" xl="12" style={{ textAlign: 'center' }}>
                        <Button color="danger" onClick={() => window.open('/staff', '_blank')}>
                            Go
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        destinations: state.geography.destinations
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
