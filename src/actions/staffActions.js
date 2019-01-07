import { beginAjaxCall, ajaxCallError, endAjaxCall } from './ajaxStatusActions'
import restClient from '../infrastructure/restClient'

export function getStaff() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const staff = await restClient.get('staff/getstaff')

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
            const staff = await restClient.get(`staff/getstaff/${email}`)

            dispatch(endAjaxCall())

            return staff
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
