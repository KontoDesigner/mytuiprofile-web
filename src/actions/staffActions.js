import { beginAjaxCall, ajaxCallError, endAjaxCall } from './ajaxStatusActions'
import restClient from '../infrastructure/restClient'

const BASE = 'STAFF'

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
