import React from 'react'
import ContactInformation from './contactInformation'
import EmployeeInformation from './employeeInformation'
import Placement from './placement'
import Education from './education'
import Languages from './languages'
import Profiling from './profiling'
import Resignation from './resignation'
import { Button } from 'reactstrap'

const ProfileForm = props => {
    if (!props.staff) {
        return (
            <div>
                <p style={{ color: '#fff', textAlign: 'center' }}>Could not find staff (primary email must be a TUI address)</p>
            </div>
        )
    }

    return (
        <div>
            {props.manager === true && props.managerIsStaff !== null && props.managerIsStaff !== true && (
                <Resignation
                    resignStaff={props.resignStaff}
                    resignHistory={props.resignHistory}
                    handleResignHistoryField={props.handleResignHistoryField}
                    handleResignHistorySelect={props.handleResignHistorySelect}
                    handleResignHistoryDatePicker={props.handleResignHistoryDatePicker}
                    jobTitles={props.jobTitles}
                />
            )}

            <ContactInformation staff={props.staff} handleStaffField={props.handleStaffField} disabled={props.disabled} />

            <EmployeeInformation
                staff={props.staff}
                handleStaffField={props.handleStaffField}
                handleStaffSelect={props.handleStaffSelect}
                handleStaffDatePicker={props.handleStaffDatePicker}
                sourceMarkets={props.sourceMarkets}
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

            <Profiling staff={props.staff} handleStaffMultiSelect={props.handleStaffMultiSelect} disabled={props.disabled} />

            {props.positionAssigns && (
                <div>
                    {props.positionAssigns.currentPositionAssign && (
                        <div>
                            <Placement
                                number={1}
                                handleStaffField={props.handleStaffField}
                                handleStaffSelect={props.handleStaffSelect}
                                handleStaffDatePicker={props.handleStaffDatePicker}
                                disabled={props.disabled}
                                positionAssign={props.positionAssigns.currentPositionAssign}
                            />
                        </div>
                    )}

                    {props.positionAssigns.nextPositionAssign && (
                        <div>
                            <Placement
                                number={2}
                                handleStaffField={props.handleStaffField}
                                handleStaffSelect={props.handleStaffSelect}
                                handleStaffDatePicker={props.handleStaffDatePicker}
                                disabled={props.disabled}
                                positionAssign={props.positionAssigns.nextPositionAssign}
                            />
                        </div>
                    )}

                    {props.positionAssigns.followingPositionAssign && (
                        <div>
                            <Placement
                                number={3}
                                handleStaffField={props.handleStaffField}
                                handleStaffSelect={props.handleStaffSelect}
                                handleStaffDatePicker={props.handleStaffDatePicker}
                                disabled={props.disabled}
                                positionAssign={props.positionAssigns.followingPositionAssign}
                            />
                        </div>
                    )}

{props.positionAssigns.nextFollowingPositionAssign && (
                        <div>
                            <Placement
                                number={4}
                                handleStaffField={props.handleStaffField}
                                handleStaffSelect={props.handleStaffSelect}
                                handleStaffDatePicker={props.handleStaffDatePicker}
                                disabled={props.disabled}
                                positionAssign={props.positionAssigns.nextFollowingPositionAssign}
                            />
                        </div>
                    )}
                </div>
            )}

            {props.disabled !== true && (
                <Button
                    size="lg"
                    onClick={() => {
                        props.updateStaff()
                    }}
                    color="success">
                    Save
                </Button>
            )}
        </div>
    )
}

export default ProfileForm
