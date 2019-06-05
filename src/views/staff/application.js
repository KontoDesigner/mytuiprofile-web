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
                firstApplicationVisible={props.firstApplicationVisible}
                secondApplicationVisible={props.secondApplicationVisible}
                keywords={props.keywords}
                handleFirstApplicationInput={props.handleFirstApplicationInput}
                sourceMarkets={props.sourceMarkets}
                save={props.save}
                toggleAssignRoleModal={props.toggleAssignRoleModal}
            />
        </div>
    )
}

export default Application
