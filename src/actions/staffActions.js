import { beginAjaxCall, ajaxCallError, endAjaxCall } from './ajaxStatusActions'
import restClient from '../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'

const BASE = 'staff'

export function getStaff() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const staff = await restClient.get(`${BASE}/getstaff`)

            if (staff) {
                staff.suitable = staff.suitable && staff.suitable !== '' ? staff.suitable.split(',') : []
                staff.international = staff.international && staff.international !== '' ? staff.international.split(',') : []
                staff.nationalConcept = staff.nationalConcept && staff.nationalConcept !== '' ? staff.nationalConcept.split(',') : []
            }

            dispatch(endAjaxCall())

            return staff
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getStaffFromEmail(email) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const staff = await restClient.get(`${BASE}/getstaff/${email}`)

            dispatch(endAjaxCall())

            return staff
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getResignHistory(email) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const resignHistory = await restClient.get(`${BASE}/getresignhistory/${email}`)

            dispatch(endAjaxCall())

            return resignHistory
                ? resignHistory
                : {
                      applicationType: null,
                      fromDate: null,
                      appDate: null,
                      managerReason: null,
                      signature: null,
                      jobTitleWhenResigned: null,
                      reasonForResignment: null,
                      resignComm: null,
                      dateModified: null,
                      staffId: null,
                      recommend: null
                  }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function updateStaff(staff) {
    return async function(dispatch) {
        let copy = JSON.parse(JSON.stringify(staff))

        dispatch(beginAjaxCall())

        copy.suitable = copy.suitable ? copy.suitable.join() : null
        copy.international = copy.international ? copy.international.join() : null
        copy.nationalConcept = copy.nationalConcept ? copy.nationalConcept.join() : null

        for (var prop in copy) {
            if (copy.hasOwnProperty(prop)) {
                copy[prop.substring(0, 1).toUpperCase() + prop.substring(1)] = copy[prop]
                delete copy[prop]
            }
        }

        try {
            const res = await restClient.post(`${BASE}/updatestaff`, copy)

            dispatch(endAjaxCall())

            if (res && res.ok === true) {
                toastr.success('Success', 'Staff updated')
            } else {
                toastr.error('Error', 'Could not update staff')
            }

            return res
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

function validateResignStaff(resignHistory) {
    if (!resignHistory.FromDate || resignHistory.FromDate === '') {
        return false
    }

    if (!resignHistory.AppDate || resignHistory.AppDate === '') {
        return false
    }

    if (!resignHistory.ManagerReason || resignHistory.ManagerReason === '') {
        return false
    }

    if (!resignHistory.Signature || resignHistory.Signature === '') {
        return false
    }

    if (!resignHistory.JobTitleWhenResigned || resignHistory.JobTitleWhenResigned === '') {
        return false
    }

    if (!resignHistory.ReasonForResignment || resignHistory.ReasonForResignment === '') {
        return false
    }

    if (!resignHistory.ResignComm || resignHistory.ResignComm === '') {
        return false
    }

    if (!resignHistory.DateModified || resignHistory.DateModified === '') {
        return false
    }

    if (!resignHistory.StaffID || resignHistory.StaffID === '') {
        return false
    }

    if (!resignHistory.Recommend || resignHistory.Recommend === '') {
        return false
    }
}

export function resignStaff(resignHistory) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        var currentdate = new Date()
        var newdatemodified = currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getDate()

        const req = {
            ApplicationType: resignHistory.applicationType,
            FromDate: resignHistory.appDate,
            AppDate: resignHistory.appDate,
            ManagerReason: resignHistory.managerReason,
            Signature: resignHistory.signature,
            JobTitleWhenResigned: resignHistory.jobTitleWhenResigned,
            ReasonForResignment: resignHistory.reasonForResignment,
            ResignComm: resignHistory.resignComm,
            DateModified: newdatemodified,
            StaffID: resignHistory.staffId,
            Recommend: resignHistory.recommend
        }

        const valid = validateResignStaff(req)

        if (valid === false) {
            dispatch(endAjaxCall())

            return toastr.error('Error', 'All fields must be filled in')
        }

        try {
            const res = await restClient.post(`${BASE}/resignstaff`, req)

            dispatch(endAjaxCall())

            if (res && res.ok === true) {
                toastr.success('Success', 'Staff resigned')
            } else {
                toastr.error('Error', 'Could not resign staff')
            }

            return res
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getStaffs(destination) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const staffs = await restClient.get(`${BASE}/getstaffs/${destination}`)

            dispatch(endAjaxCall())

            return staffs
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getPositionAssigns() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const positionAssigns = await restClient.get(`${BASE}/getpositionassigns`)

            dispatch(endAjaxCall())

            return positionAssigns
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getPositionAssignsFromEmail(email) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const positionAssigns = await restClient.get(`${BASE}/getpositionassigns/${email}`)

            dispatch(endAjaxCall())

            return positionAssigns
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
