import { beginAjaxCall, ajaxCallError, endAjaxCall } from './ajaxStatusActions'
import restClient from '../infrastructure/restClient'

export function getStaffs(destination) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const staffs = await restClient.get(`staff/destination/${destination}`)

            dispatch(endAjaxCall())

            return staffs
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
