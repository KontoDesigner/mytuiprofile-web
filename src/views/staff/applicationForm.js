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

    const noWinterWorkResign = props.firstApplication.preferToWork.some(function(v) {
        return v.id.toLowerCase().indexOf('no winter work plan to resign') >= 0
    })

    return (
        <div>
            {props.manager === true && props.managerIsStaff !== true && props.settings.managerComments === 'Yes' && (
                <ManagerSection
                    yesNo={yesNo}
                    handleInputField={props.handleFirstApplicationInput}
                    handleSelect={props.handleFirstApplicationSelect}
                    application={props.firstApplication}
                    keywords={props.keywords}
                    midYearReview={props.midYearReview}
                    midYearTui={props.midYearTui}
                    earlyPerformance={props.earlyPerformance}
                />
            )}

            {props.applicationVisible === true && (
                <Season
                    firstApplication={true}
                    application={props.firstApplication}
                    destinations={props.destinations}
                    handleMultiSelect={props.handleFirstApplicationMultiSelect}
                    handleSelect={props.handleFirstApplicationSelect}
                    preferToWork={[]}
                    jobTitles={props.jobTitles}
                    keywords={props.keywords}
                    jobFamily={props.jobFamily}
                    sourceMarket={props.sourceMarket}
                    noWinterWorkResign={noWinterWorkResign}
                />
            )}

            {props.applicationVisible === true && (
                <Season
                    firstApplication={false}
                    application={props.secondApplication}
                    destinations={props.destinations}
                    handleMultiSelect={props.handleSecondApplicationMultiSelect}
                    handleSelect={props.handleSecondApplicationSelect}
                    preferToWork={[]}
                    jobTitles={props.jobTitles}
                    keywords={props.keywords}
                    jobFamily={props.jobFamily}
                    handleDate={props.handleSecondApplicationDatePicker}
                    sourceMarket={props.sourceMarket}
                    noWinterWorkResign={noWinterWorkResign}
                />
            )}

            <General
                application={props.firstApplication}
                handleSelect={props.handleFirstApplicationSelect}
                handleInputField={props.handleFirstApplicationInput}
                jobTitles={props.generalJobTitles}
                sourceMarkets={props.sourceMarkets}
                yesNo={yesNo}
                changePosition={props.changePosition}
                mostImportant={props.mostImportant}
                noWinterWorkResign={noWinterWorkResign}
            />

            <Button size="sm" onClick={props.save} color="success">
                Submit
            </Button>
        </div>
    )
}

export default ApplicationForm
