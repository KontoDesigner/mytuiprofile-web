import React from 'react'
import { Row, Col } from 'reactstrap'
import ProfileForm from './profileForm'

const Profile = props => {
    return (
        <div>
            <Row>
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                    <div className="hr">
                        <span className="hr-title">My Profile</span>
                    </div>
                </Col>
            </Row>

            <ProfileForm
                positionAssigns={props.positionAssigns}
                updateStaff={props.updateStaff}
                resignStaff={props.resignStaff}
                handleResignation={props.handleResignation}
                managerIsStaff={props.managerIsStaff}
                manager={props.manager}
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
                handleStaffMultiSelect={props.handleStaffMultiSelect}
            />
        </div>
    )
}

export default Profile
