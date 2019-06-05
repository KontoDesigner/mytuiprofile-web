import React from 'react'
import ManagerSection from './managerSection'
import Season from './season'
import General from './general'
import { Button } from 'reactstrap'

const ApplicationForm = props => {
    const yesNo = [
        {
            id: 'Yes',
            name: 'Yes'
        },
        {
            id: 'No',
            name: 'No'
        }
    ]

    return (
        <div>
            {props.manager === true && props.managerIsStaff !== true && (
                <ManagerSection
                    yesNo={yesNo}
                    handleInputField={props.handleFirstApplicationInput}
                    handleSelect={props.handleFirstApplicationSelect}
                    application={props.firstApplication}
                    keywords={props.keywords}
                />
            )}

            {props.firstApplicationVisible === true && (
                <Season
                    application={props.firstApplication}
                    destinations={props.destinations}
                    handleMultiSelect={props.handleFirstApplicationMultiSelect}
                    handleSelect={props.handleFirstApplicationSelect}
                    preferToWork={[]}
                    jobTitles={props.jobTitles}
                    keywords={props.keywords}
                />
            )}

            {props.secondApplicationVisible === true && (
                <Season
                    application={props.secondApplication}
                    destinations={props.destinations}
                    handleMultiSelect={props.handleSecondApplicationMultiSelect}
                    handleSelect={props.handleSecondApplicationSelect}
                    preferToWork={[]}
                    jobTitles={props.jobTitles}
                    keywords={props.keywords}
                />
            )}

            <General
                application={props.firstApplication}
                handleSelect={props.handleFirstApplicationSelect}
                handleInputField={props.handleFirstApplicationInput}
                keywords={props.keywords}
                jobTitles={props.jobTitles}
                sourceMarkets={props.sourceMarkets}
                yesNo={yesNo}
            />

            {props.manager === true && props.managerIsStaff !== true ? (
                <Button size="sm" onClick={props.toggleAssignRoleModal()} color="success">
                    Assign Applicant To Position
                </Button>
            ) : (
                <Button size="sm" onClick={props.save} color="success">
                    Submit
                </Button>
            )}
        </div>
    )
}

export default ApplicationForm
