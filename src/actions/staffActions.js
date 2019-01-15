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

export function getResignHistory() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const resignHistory = await restClient.get(`${BASE}/getresignhistory`)

            dispatch(endAjaxCall())

            return resignHistory ? resignHistory : {}
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getResignHistoryFromEmail(email) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const resignHistory = await restClient.get(`${BASE}/getresignhistory/${email}`)

            dispatch(endAjaxCall())

            return resignHistory ? resignHistory : {}
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function updateStaff(staff) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        const req = {
            staff
        }

        try {
            const res = await restClient.post(BASE, req)

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

export function updateStaffFromEmail(email, staff) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        const req = {
            staff
        }

        try {
            const res = await restClient.post(`${BASE}/${email}`, req)

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
