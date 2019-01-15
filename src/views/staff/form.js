import React from 'react'
import ContactInformation from './contactInformation'
import EmployeeInformation from './employeeInformation'
import Placement from './placement'
import Education from './education'
import Languages from './languages'
import Profiling from './profiling'
import Resignation from './resignation'

const Form = props => {
    if (!props.staff) {
        return (
            <div>
                <p style={{ color: '#fff' }}>Could not find staff</p>
            </div>
        )
    }

    return (
        <div>
            <ContactInformation staff={props.staff} handleStaffField={props.handleStaffField} disabled={props.disabled} />

            <EmployeeInformation
                staff={props.staff}
                handleStaffField={props.handleStaffField}
                handleStaffSelect={props.handleStaffSelect}
                handleStaffDatePicker={props.handleStaffDatePicker}
                sourceMarkets={props.sourceMarkets}
                disabled={props.disabled}
            />

            <Placement
                handleStaffField={props.handleStaffField}
                handleStaffSelect={props.handleStaffSelect}
                handleStaffDatePicker={props.handleStaffDatePicker}
                disabled={props.disabled}
            />

            <Education
                staff={props.staff}
                handleStaffField={props.handleStaffField}
                handleStaffSelect={props.handleStaffSelect}
                disabled={props.disabled}
            />

            <Languages
                staff={props.staff}
                handleStaffField={props.handleStaffField}
                handleStaffSelect={props.handleStaffSelect}
                disabled={props.disabled}
            />

            <Profiling staff={props.staff} handleStaffSelect={props.handleStaffSelect} disabled={props.disabled} />

            <Resignation
                staff={props.staff}
                resignHistory={props.resignHistory}
                handleResignHistoryField={props.handleResignHistoryField}
                handleResignHistorySelect={props.handleResignHistorySelect}
                handleResignHistoryDatePicker={props.handleResignHistoryDatePicker}
                handleStaffField={props.handleStaffField}
                jobTitles={props.jobTitles}
                disabled={props.disabled}
            />
        </div>
    )
}

export default Form
