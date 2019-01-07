import React from 'react'
import { Row, Col } from 'reactstrap'
import Select from 'react-select'

const ManageStaff = props => {
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
                            options={props.destinations}
                            onChange={props.destinationOnChange}
                            value={props.selectedDestination}
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
                            options={props.staffs}
                            onChange={props.staffOnChange}
                            value={props.selectedStaff}
                            placeholder="Select.."
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ManageStaff