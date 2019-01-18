import { beginAjaxCall, ajaxCallError, endAjaxCall } from './ajaxStatusActions'
import restClient from '../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'

const BASE = 'staff'

export function getStaff() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const staff = await restClient.get(`${BASE}/getstaff`)

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
                      staffId: null
                  }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function updateStaff(staff) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        for (var prop in staff) {
            if (staff.hasOwnProperty(prop)) {
                staff[prop.substring(0, 1).toUpperCase() + prop.substring(1)] = staff[prop]
                delete staff[prop]
            }
        }

        const req = {
            staff
        }

        try {
            const res = await restClient.post(`${BASE}/updatestaff`, req)

            dispatch(endAjaxCall())

            if (res === true) {
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

export function updateResignHistory(resignInformation) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        var currentdate = new Date()
        var newdatemodified = currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getDate()

        const req = {
            ApplicationType: resignInformation.applicationType,
            FromDate: resignInformation.appDate,
            AppDate: resignInformation.appDate,
            ManagerReason: resignInformation.managerReason,
            Signature: resignInformation.signature,
            JobTitleWhenResigned: resignInformation.jobTitleWhenResigned,
            ReasonForResignment: resignInformation.reasonForResignment,
            ResignComm: resignInformation.resignComm,
            DateModified: newdatemodified,
            StaffID: resignInformation.staffId
        }

        try {
            const res = await restClient.post(`${BASE}/updateresignhistory`, req)

            dispatch(endAjaxCall())

            if (res === true) {
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
