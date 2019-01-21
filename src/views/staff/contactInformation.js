import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import TextInput from '../../components/textInput'

const ContactInformation = props => {
    return (
        <Card>
            <CardHeader>Contact Information</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            disabled={props.disabled}
                            name="firstName"
                            label="First Name"
                            value={props.staff.firstName}
                            onChange={props.handleStaffField}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            disabled={props.disabled}
                            name="lastName"
                            label="Sur Name"
                            value={props.staff.lastName}
                            onChange={props.handleStaffField}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="fullName" label="2nd Sur Name" value={props.staff.lastName} disabled={true} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput disabled={props.disabled} name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            disabled={props.disabled}
                            name="email"
                            label="E-Mail"
                            value={props.staff.email}
                            onChange={props.handleStaffField}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            disabled={props.disabled}
                            name="emailWork"
                            label="E-Mail (Work)"
                            value={props.staff.emailWork}
                            onChange={props.handleStaffField}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            disabled={props.disabled}
                            name="phonehome"
                            label="Phone"
                            value={props.staff.phoneHome}
                            onChange={props.handleStaffField}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            disabled={props.disabled}
                            name="phoneDestination"
                            label="Phone (Destination)"
                            value={props.staff.phone}
                            onChange={props.handleStaffField}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            disabled={props.disabled}
                            name="homeAirport"
                            label="Home Airport"
                            value={props.staff.homeAirport}
                            onChange={props.handleStaffField}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            name="homeAirportAlt"
                            label="Alt Home Airport"
                            value={props.staff.homeAirportAlt}
                            onChange={props.handleStaffField}
                            disabled={props.disabled}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            name="homeAirportAlt2"
                            label="Alt Home Airport 2"
                            value={props.staff.homeAirportAlt2}
                            onChange={props.handleStaffField}
                            disabled={props.disabled}
                        />
                    </Col>
                </div>
            </CardBody>
        </Card>
    )
}

export default ContactInformation
