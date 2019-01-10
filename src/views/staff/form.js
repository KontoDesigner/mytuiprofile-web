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
            <ContactInformation staff={props.staff} handleStaffField={props.handleStaffField} />

            <EmployeeInformation
                staff={props.staff}
                handleStaffField={props.handleStaffField}
                handleStaffSelect={props.handleStaffSelect}
                handleStaffDatePicker={props.handleStaffDatePicker}
            />

            <Placement
                handleStaffField={props.handleStaffField}
                handleStaffSelect={props.handleStaffSelect}
                handleStaffDatePicker={props.handleStaffDatePicker}
            />

            <Education staff={props.staff} handleStaffField={props.handleStaffField} handleStaffSelect={props.handleStaffSelect} />

            <Languages staff={props.staff} handleStaffField={props.handleStaffField} handleStaffSelect={props.handleStaffSelect} />

            <Profiling staff={props.staff} handleStaffSelect={props.handleStaffSelect} />

            {/* <Resignation staff={props.staff} /> */}
        </div>
    )
}

export default Form
