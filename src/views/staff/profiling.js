import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import Select from 'react-select'

const Profiling = props => {
    return (
        <Card>
            <CardHeader>Profiling</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="suitable">If applicable to your job role. Indicate what type of guest you are suitable to work with</label>

                        <Select
                            id="suitable"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.suitable}
                            onChange={v => {
                                props.handleStaffSelect('suitable', v, 'id')
                            }}
                            value={props.staff.suitable === '' ? null : props.staff.suitable}
                            placeholder="Select"
                        />
                    </Col>

                    <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="childCare">I am interested and happy to work in following international concepts</label>

                        <Select
                            id="international"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.international}
                            onChange={v => {
                                props.handleStaffSelect('international', v, 'id')
                            }}
                            value={props.staff.international === '' ? null : props.staff.international}
                            placeholder="Select"
                        />
                    </Col>

                    <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="national">I am interested and happy to work in following national concepts</label>

                        <Select
                            id="national"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.national}
                            onChange={v => {
                                props.handleStaffSelect('national', v, 'id')
                            }}
                            value={props.staff.national === '' ? null : props.staff.national}
                            placeholder="Select"
                        />
                    </Col>
                </div>
            </CardBody>
        </Card>
    )
}

export default Profiling
