import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import TextInput from '../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'
import { Row, Col, Label, Input, Button } from 'reactstrap'

const managerReasons = [
    {
        id: 'Dismissed',
        name: 'Dismissed'
    },
    {
        id: 'Resigned',
        name: 'Resigned'
    },
    {
        id: 'Other (Please Specify)',
        name: 'Other (Please Specify)'
    }
]

const resignmentReasons = [
    {
        id: 'Expectations of Job',
        name: 'Expectations of Job'
    },
    {
        id: 'Management',
        name: 'Management'
    },
    {
        id: 'Training',
        name: 'Training'
    },
    {
        id: 'Pay & Reward',
        name: 'Pay & Reward'
    },
    {
        id: 'Working Hours',
        name: 'Working Hours'
    },
    {
        id: 'Personal/Family Reasons',
        name: 'Personal/Family Reasons'
    },
    {
        id: 'Destination',
        name: 'Destination'
    },
    {
        id: 'Returned to School/University',
        name: 'Returned to School/University'
    },
    {
        id: 'Found a new job',
        name: 'Found a new job'
    }
]

const Resignation = props => {
    const enableResignBtn = (
        <Button
            // disabled={this.props.abscense === undefined && this.props.abscense === null}
            size="sm"
            className="pull-right"
            onClick={() => {
                debugger
                props.handleSaveResign()
            }}
            color="warning"
            // style={{ marginRight: '2px', marginBottom: '2px' }}
        >
            Enable
        </Button>
    )

    return (
        <Card>
            <CardHeader> Resignation </CardHeader>
            {/* <CardHeader>Resignation   -  {enableResignBtn} </CardHeader> */}
            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <label htmlFor="appDate">Last Working Date</label>

                        <Datetime
                            value={props.resignHistory.appDate}
                            onChange={v => {
                                props.handleResignHistoryDatePicker('appDate', v)
                            }}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
                        <label htmlFor="managerReason">Manager Reason</label>
                        <Select
                            id="managerReason"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={managerReasons}
                            onChange={v => {
                                props.handleResignHistorySelect('managerReason', v, 'id')
                            }}
                            value={props.resignHistory.managerReason === '' ? null : props.resignHistory.managerReason}
                            placeholder="Select"
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
                        <label htmlFor="reasonForResignment">Reason for Resignment</label>

                        <Select
                            id="reasonForResignment"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={resignmentReasons}
                            onChange={v => {
                                props.handleResignHistorySelect('reasonForResignment', v, 'id')
                            }}
                            value={props.resignHistory.reasonForResignment === '' ? null : props.resignHistory.reasonForResignment}
                            placeholder="Select"
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
                        <label htmlFor="jobTitleWhenResigned">JobTitle When Resigned</label>

                        <Select
                            id="jobTitleWhenResigned"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobTitles}
                            onChange={v => {
                                props.handleResignHistorySelect('jobTitleWhenResigned', v, 'id')
                            }}
                            value={props.resignHistory.jobTitleWhenResigned === '' ? null : props.resignHistory.jobTitleWhenResigned}
                            placeholder="JobTitleWhenResigned"
                        />
                    </Col>

                    <Col sm="12" md="6" lg="12" xl="4" className="form-group">
                        {/* {<TextInput name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} /> } */}
                        <Label for="resignComm">Comments</Label>
                        <Input
                            required
                            type="textarea"
                            maxLength="1000"
                            name="resignComm"
                            id="resignComm"
                            onChange={props.handleStaffField}
                            rows={6}
                            aria-multiline="true"
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="signature" label="Signature" value={props.staff.signature} onChange={props.handleStaffField} />
                    </Col>
                </div>
            </CardBody>
            <CardFooter style={{ paddingBottom: '4px', paddingTop: '4px' }}>
                <Row>
                    <Col>
                        {' '}
                        {enableResignBtn}
                        {/* {disableResignBtn } */}
                    </Col>
                </Row>
            </CardFooter>
        </Card>
    )
}

export default Resignation