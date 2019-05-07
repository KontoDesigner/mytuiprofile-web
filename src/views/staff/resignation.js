import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import TextInput from '../../components/textInput'
import Select from '../../components/select'
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

const recommend = [
    {
        id: 'Yes',
        name: 'Yes'
    },
    {
        id: 'No',
        name: 'No'
    }
]

const resign = props => {
    if (!props.resignHistory.appDate || props.resignHistory.appDate === '') {
        return
    }

    if (!props.resignHistory.managerReason || props.resignHistory.managerReason === '') {
        return
    }

    if (!props.resignHistory.reasonForResignment || props.resignHistory.reasonForResignment === '') {
        return
    }

    if (!props.resignHistory.jobTitleWhenResigned || props.resignHistory.jobTitleWhenResigned === '') {
        return
    }

    if (!props.resignHistory.recommend || props.resignHistory.recommend === '') {
        return
    }

    if (!props.resignHistory.resignComm || props.resignHistory.resignComm === '') {
        return
    }

    if (!props.resignHistory.signature || props.resignHistory.signature === '') {
        return
    }

    props.resignStaff()
}

const Resignation = props => {
    const enableResignBtn = (
        <Button
            size="sm"
            className="pull-right"
            onClick={() => {
                resign(props)
            }}
            color="warning">
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
                            inputProps={{ placeholder: 'YYYY-MM-DD', disabled: props.disabled }}
                        />
                        {(!props.resignHistory.appDate || props.resignHistory.appDate === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
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
                            disabled={props.disabled}
                        />
                        {(!props.resignHistory.managerReason || props.resignHistory.managerReason === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
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
                            disabled={props.disabled}
                        />
                        {(!props.resignHistory.reasonForResignment || props.resignHistory.reasonForResignment === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
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
                            disabled={props.disabled}
                        />
                        {(!props.resignHistory.jobTitleWhenResigned || props.resignHistory.jobTitleWhenResigned === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
                        <label htmlFor="recommend">Do you recommend for re-employment?</label>

                        <Select
                            id="recommend"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={recommend}
                            onChange={v => {
                                props.handleResignHistorySelect('recommend', v, 'id')
                            }}
                            value={props.resignHistory.recommend === '' ? null : props.resignHistory.recommend}
                            placeholder="Select"
                        />
                        {(!props.resignHistory.recommend || props.resignHistory.recommend === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
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
                            onChange={props.handleResignHistoryField}
                            rows={6}
                            aria-multiline="true"
                            disabled={props.disabled}
                            value={props.resignHistory.resignComm}
                        />
                        {props.resignHistory.recommend === 'No' && (!props.resignHistory.resignComm || props.resignHistory.resignComm === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            disabled={props.disabled}
                            name="signature"
                            label="Signature"
                            value={props.resignHistory.signature}
                            onChange={props.handleResignHistoryField}
                        />
                        {(!props.resignHistory.signature || props.resignHistory.signature === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
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
