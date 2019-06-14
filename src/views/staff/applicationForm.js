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

    if (props.created === true && props.manager === false) {
        return <div style={{ color: '#fff' }}>Thank you for your application!</div>
    }

    return (
        <div>
            {props.manager === true && props.managerIsStaff !== true && props.settings.managerComments === 'Yes' && (
                <ManagerSection
                    yesNo={yesNo}
                    handleInputField={props.handleFirstApplicationInput}
                    handleSelect={props.handleFirstApplicationSelect}
                    application={props.firstApplication}
                    keywords={props.keywords}
                />
            )}

            {props.applicationVisible === true && (
                <Season
                    application={props.firstApplication}
                    destinations={props.destinations}
                    handleMultiSelect={props.handleFirstApplicationMultiSelect}
                    handleSelect={props.handleFirstApplicationSelect}
                    preferToWork={[]}
                    jobTitles={props.jobTitles}
                    keywords={props.keywords}
                    jobFamily={props.jobFamily}
                    plannedToResign={props.plannedToResign}
                    noWinterWork={props.noWinterWork}
                />
            )}

            {props.applicationVisible === true && (
                <Season
                    application={props.secondApplication}
                    destinations={props.destinations}
                    handleMultiSelect={props.handleSecondApplicationMultiSelect}
                    handleSelect={props.handleSecondApplicationSelect}
                    preferToWork={[]}
                    jobTitles={props.jobTitles}
                    keywords={props.keywords}
                    jobFamily={props.jobFamily}
                    plannedToResign={props.plannedToResign}
                    noWinterWork={null}
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
                plannedToResign={props.plannedToResign}
            />

            <Button size="sm" onClick={props.save} color="success">
                Submit
            </Button>
        </div>
    )
}

export default ApplicationForm
