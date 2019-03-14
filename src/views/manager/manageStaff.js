import React from 'react'
import { Row, Col } from 'reactstrap'
import Select from '../../components/select'

const styles = {
    formGroup: {
        marginBottom: '5px'
    }
}

const ManageStaff = props => {
    return (
        <div>
            <Row>
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                    <div className="hr">
                        <span className="hr-title">Manage Staff</span>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm="6" md="6" lg="6" xl="6">
                    <div className="form-group form-group-select" style={styles.formGroup}>
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
                    <div className="form-group form-group-select" style={styles.formGroup}>
                        <label htmlFor="staff">Staff</label>

                        <Select
                            id="staff"
                            valueKey="value"
                            labelKey="label"
                            disabled={props.selectedDestination === null}
                            className="form-control"
                            options={props.staffs}
                            onChange={props.staffOnChange}
                            value={props.selectedStaff}
                            placeholder="Select.."
                        />
                    </div>
                </Col>

                <Col style={{ marginTop: '15px', textAlign: 'center', textDecoration: 'underline', fontSize: '1.4em' }}>
                    <a href={props.f2wUrl} target="_blank">
                        FLY2WORK
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default ManageStaff
