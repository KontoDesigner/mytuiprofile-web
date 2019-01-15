import React from 'react'
import { Row, Col } from 'reactstrap'
import Form from './form'

const MyProfile = props => {
    return (
        <div>
            <Row>
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                    <div className="hr">
                        <span className="hr-title">My Profile</span>
                    </div>
                </Col>
            </Row>

            <Form
                staff={props.staff}
                disabled={props.disabled}
                resignHistory={props.resignHistory}
                jobTitles={props.jobTitles}
                sourceMarkets={props.sourceMarkets}
                handleStaffField={props.handleStaffField}
                handleStaffSelect={props.handleStaffSelect}
                handleStaffDatePicker={props.handleStaffDatePicker}
                handleResignHistoryField={props.handleResignHistoryField}
                handleResignHistorySelect={props.handleResignHistorySelect}
                handleResignHistoryDatePicker={props.handleResignHistoryDatePicker}
            />
        </div>
    )
}

export default MyProfile
