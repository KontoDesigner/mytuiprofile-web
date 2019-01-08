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
            <ContactInformation staff={props.staff} />

            <EmployeeInformation staff={props.staff} />

            <Placement />

            <Education staff={props.staff} />

            <Languages staff={props.staff} />

            <Profiling staff={props.staff} />

            {/* <Resignation staff={props.staff} /> */}
        </div>
    )
}

export default Form
