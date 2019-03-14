import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import MultiSelect from '../../components/multiSelect'

const suitable = [
    //not in use  delete
    {
        id: 'Adults/Couples',
        name: 'Adults/Couples'
    },
    {
        id: 'Families',
        name: 'Families'
    },
    {
        id: 'Scene 18-25 years old',
        name: 'Scene 18-25 years old'
    },
    {
        id: '5*hotels',
        name: '5*hotels'
    },
    {
        id: '2-3*hotels',
        name: '2-3*hotels'
    },
    {
        id: 'Prefer to work in a team',
        name: 'Prefer to work in a team'
    },
    {
        id: 'Prefer to not work in a team',
        name: 'Prefer to not work in a team'
    },
    {
        id: 'Willing to work in a resort on your own',
        name: 'Willing to work in a resort on your own'
    }
]

const international = [
    //not in use  delete
    {
        id: 'Family life',
        name: 'Family life'
    },
    {
        id: 'Scene',
        name: 'Scene'
    },
    {
        id: 'Sensatori',
        name: 'Sensatori'
    },
    {
        id: 'Sensimar',
        name: 'Sensimar'
    },
    {
        id: 'Suneo club',
        name: 'Suneo club'
    }
]

const national = [
    //not in use  delete
    {
        id: '1-2 Fun club (Germany)',
        name: '1-2 Fun club (Germany)'
    },
    {
        id: 'Best Family (Germany)',
        name: 'Best Family (Germany)'
    },
    {
        id: 'Blue Star (Nordic)',
        name: 'Blue Star (Nordic)'
    },
    {
        id: 'Holiday Village (UK)',
        name: 'Holiday Village (UK)'
    },
    {
        id: 'Thomson Gold (UK)',
        name: 'Thomson Gold (UK)'
    },
    {
        id: 'Time To Smile (Netherlands)',
        name: 'Time To Smile (Netherlands)'
    }
]

const Profiling = props => {
    return (
        <Card>
            <CardHeader>Profiling</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="suitable">If applicable to your job role. Indicate what type of guest you are suitable to work with</label>

                        <MultiSelect
                            id="suitable"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={suitable}
                            multi
                            onChange={v => {
                                props.handleStaffMultiSelect('suitable', v, 'id')
                            }}
                            value={props.staff.suitable === '' ? null : props.staff.suitable}
                            placeholder="Select"
                            disabled={props.disabled}
                        />
                    </Col>

                    <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="childCare">I am interested and happy to work in following international concepts</label>

                        <MultiSelect
                            id="international"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={international}
                            multi
                            onChange={v => {
                                props.handleStaffMultiSelect('international', v, 'id')
                            }}
                            value={props.staff.international === '' ? null : props.staff.international}
                            placeholder="Select"
                            disabled={props.disabled}
                        />
                    </Col>

                    <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="national">I am interested and happy to work in following national concepts</label>

                        <MultiSelect
                            id="national"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={national}
                            multi
                            onChange={v => {
                                props.handleStaffMultiSelect('nationalConcept', v, 'id')
                            }}
                            value={props.staff.nationalConcept === '' ? null : props.staff.nationalConcept}
                            placeholder="Select"
                            disabled={props.disabled}
                        />
                    </Col>
                </div>
            </CardBody>
        </Card>
    )
}

export default Profiling
