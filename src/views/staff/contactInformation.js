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
                            disabled={true}
                            name="firstName"
                            label="First Name"
                            value={props.staff.firstName}
                            onChange={props.handleStaffField}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput disabled={true} name="lastName" label="Sur Name" value={props.staff.lastName} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="fullName" label="2nd Sur Name" value={props.staff.lastName} disabled={true} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput disabled={true} name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput disabled={true} name="email" label="E-Mail" value={props.staff.email} onChange={props.handleStaffField} />
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
                            name="phoneHome"
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
                            value={props.staff.phoneDestination}
                            onChange={props.handleStaffField}
                        />
                    </Col>
                </div>
            </CardBody>
        </Card>
    )
}

export default ContactInformation
