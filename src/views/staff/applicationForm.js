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

    if (props.created === true && (props.manager === false || props.managerIsStaff === true)) {
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
                    noWinterWorkResign={props.noWinterWorkResign}
                    noWinterWorkReturn={props.noWinterWorkReturn}
                    sourceMarket={props.sourceMarket}
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
                    noWinterWorkResign={props.noWinterWorkResign}
                    noWinterWorkReturn={null}
                    handleDate={props.handleSecondApplicationDatePicker}
                    aFewWeeksOnly={props.aFewWeeksOnly}
                    sourceMarket={props.sourceMarket}
                    hideForm={props.noWinterWorkResign}
                    planToNotReturn={props.planToNotReturn}
                />
            )}

            <General
                application={props.firstApplication}
                handleSelect={props.handleFirstApplicationSelect}
                handleInputField={props.handleFirstApplicationInput}
                jobTitles={props.generalJobTitles}
                sourceMarkets={props.sourceMarkets}
                yesNo={yesNo}
                noWinterWorkResign={props.noWinterWorkResign}
                changePosition={props.changePosition}
                mostImportant={props.mostImportant}
            />

            <Button size="sm" onClick={props.save} color="success">
                Submit
            </Button>
        </div>
    )
}

export default ApplicationForm
