import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import TextInput from '../../components/textInput'
import { Col } from 'reactstrap'

const Education = props => {
    return (
        <div>
            <Card>
                <CardHeader>Education</CardHeader>

                <CardBody className="no-padding-bottom">
                    <div className="form-row">
                        <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                            <TextInput
                                disabled={true}
                                name="education"
                                label="Education"
                                value={props.staff.education}
                                onChange={props.handleStaffField}
                            />
                        </Col>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Education
