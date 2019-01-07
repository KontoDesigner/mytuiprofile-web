import { ActionTypes as types } from '../constants/geographyConstants'
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions'
import restClient from '../infrastructure/restClient'

export function getDestinationsSuccess(destinations) {
    return {
        type: types.GET_DESTINATIONS_SUCCESS,
        data: { destinations }
    }
}

export function getDestinations() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const destinations = await restClient.get(`geography/destinations`)

            dispatch(getDestinationsSuccess(destinations))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
