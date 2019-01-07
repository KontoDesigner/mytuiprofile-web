import { ActionTypes as types } from '../constants/managerConstants'
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions'
import restClient from '../infrastructure/restClient'

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
            const staffs = await restClient.get(`staff/destination/${destination}`)

            dispatch(getStaffsSuccess(staffs))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
