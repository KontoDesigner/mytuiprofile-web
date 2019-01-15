import { ActionTypes as types } from '../constants/managerConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from './ajaxStatusActions'
import restClient from '../infrastructure/restClient'

const BASE = 'staff'

export function getStaffsSuccess(staffs) {
    return {
        type: types.GET_STAFFS_SUCCESS,
        data: { staffs }
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
