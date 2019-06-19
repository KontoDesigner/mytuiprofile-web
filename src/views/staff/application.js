import React from 'react'
import { Row, Col } from 'reactstrap'
import ApplicationForm from './applicationForm'

const Application = props => {
    return (
        <div>
            <Row>
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                    <div className="hr">
                        <span className="hr-title">Application</span>
                    </div>
                </Col>
            </Row>

            {props.pendingPositionAssigns && (
                <div style={{ marginBottom: '15px', textDecoration: 'underline' }}>
                    <a style={{ cursor: 'pointer' }} href={null} onClick={props.toggleRequestedPositionAssignsModel}>
                        Pending Applications
                    </a>
                </div>
            )}

            <ApplicationForm
                firstApplication={props.firstApplication}
                secondApplication={props.secondApplication}
                managerIsStaff={props.managerIsStaff}
                manager={props.manager}
                destinations={props.destinations}
                handleFirstApplicationSelect={props.handleFirstApplicationSelect}
                handleFirstApplicationMultiSelect={props.handleFirstApplicationMultiSelect}
                handleSecondApplicationSelect={props.handleSecondApplicationSelect}
                handleSecondApplicationMultiSelect={props.handleSecondApplicationMultiSelect}
                jobTitles={props.jobTitles}
                settings={props.settings}
                applicationVisible={props.applicationVisible}
                keywords={props.keywords}
                handleFirstApplicationInput={props.handleFirstApplicationInput}
                sourceMarkets={props.sourceMarkets}
                save={props.save}
                toggleAssignModal={props.toggleAssignModal}
                created={props.created}
                jobFamily={props.jobFamily}
                plannedToResign={props.plannedToResign}
                noWinterWork={props.noWinterWork}
                handleSecondApplicationDatePicker={props.handleSecondApplicationDatePicker}
                aFewWeeksOnly={props.aFewWeeksOnly}
                sourceMarket={props.sourceMarket}
                planToNotReturn={props.planToNotReturn}
            />
        </div>
    )
}

export default Application
