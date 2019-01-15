import { beginAjaxCall, ajaxCallError, endAjaxCall } from './ajaxStatusActions'
import restClient from '../infrastructure/restClient'

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
