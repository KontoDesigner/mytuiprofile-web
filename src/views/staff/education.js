import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import TextInput from '../../components/textInput'
import Select from '../../components/select'
import { Col } from 'reactstrap'

const childCareLevels = [
    {
        id: 'Level 3 or above',
        name: 'Level 3 or above'
    },
    {
        id: 'Level 2 or equivalent',
        name: 'Level 2 or equivalent'
    },
    {
        id: 'Other',
        name: 'Other'
    },
    {
        id: 'None',
        name: 'None'
    }
]

const Education = props => {
    return (
        <div>
            <Card>
                <CardHeader>Education</CardHeader>

                <CardBody className="no-padding-bottom">
                    <div className="form-row">
                        <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                            <TextInput
                                disabled={props.disabled}
                                name="education"
                                label="Education"
                                value={props.staff.education}
                                onChange={props.handleStaffField}
                            />
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                            <label htmlFor="childCare">Childcare Level</label>

                            <Select
                                id="childCare"
                                valueKey="id"
                                labelKey="name"
                                className="form-control"
                                options={childCareLevels}
                                onChange={v => {
                                    props.handleStaffSelect('childCare', v, 'id')
                                }}
                                disabled={props.disabled}
                                value={props.staff.childCare === '' ? null : props.staff.childCare}
                                placeholder="Select"

                                //    id="childCare"

                                //    valueKey="id"
                                //    labelKey="name"
                                //    className="form-control"
                                //    options={props.childCareLevels}
                                //    onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                                //    value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                                //    placeholder="childCare"
                            />
                        </Col>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Education
