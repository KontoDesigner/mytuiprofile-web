import React from 'react'
import { Card, CardBody, CardHeader, Row, Col } from 'reactstrap'
import Datetime from 'react-datetime'
import TextInput from '../../components/textInput'

const Placement = props => {
    if (props.positionAssign === undefined || props.positionAssign === null) {
        return (
            <Card>
                <CardHeader>Placement</CardHeader>

                <CardBody>
                    <Row>
                        <Col>
                            <p style={{ color: '#fff', margin: 0 }}>No placement found.</p>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    } else {
        return (
            <Card>
                <CardHeader>Placement</CardHeader>

                <CardBody className="no-padding-bottom">
                    <div className="form-row">
                        <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                            <TextInput
                                name="regionHeadOf"
                                label="Region/Head Of"
                                disabled={true}
                                value={props.positionAssign.region + ' ' + props.positionAssign.headOf}
                            />
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                            <TextInput
                                name="location"
                                label="Location"
                                disabled={true}
                                value={props.positionAssign.sddDm + ' ' + props.positionAssign.destination + ' ' + props.positionAssign.conceptHotel}
                            />
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                            <TextInput name="jobFamily" label="Job Family" disabled={true} value={props.positionAssign.jobFamily} />
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                            <TextInput name="jobTitle" label="Job Title" disabled={true} value={props.positionAssign.jobTitle} />
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                            <label htmlFor="StaffStartDate">Start Date</label>

                            <Datetime
                                value={props.positionAssign !== null ? props.positionAssign.positionStartDate : ''}
                                timeFormat={false}
                                dateFormat="YYYY-MM-DD"
                                closeOnSelect
                                utc={true}
                                inputProps={{ placeholder: 'YYYY-MM-DD', disabled: props.disabled }}
                            />
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                            <label htmlFor="StaffEndDate">End Date</label>

                            <Datetime
                                value={props.positionAssign !== null ? props.positionAssign.positionEndDate : ''}
                                timeFormat={false}
                                dateFormat="YYYY-MM-DD"
                                closeOnSelect
                                utc={true}
                                inputProps={{ placeholder: 'YYYY-MM-DD', disabled: props.disabled }}
                            />
                        </Col>
                    </div>
                </CardBody>
            </Card>
        )
    }
}

export default Placement
