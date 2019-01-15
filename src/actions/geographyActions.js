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

export function getJobTitlesSuccess(jobTitles) {
    return {
        type: types.GET_JOBTITLES_SUCCESS,
        data: { jobTitles }
    }
}

export function getJobTitles() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const jobTitles = await restClient.get(`geography/getjobtitles`)

            dispatch(getJobTitlesSuccess(jobTitles))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getSourceMarketsSuccess(sourceMarkets) {
    return {
        type: types.GET_SOURCEMARKETS_SUCCESS,
        data: { sourceMarkets: sourceMarkets }
    }
}

export function getSourceMarkets() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const sourceMarkets = await restClient.get(`geography/getsourcemarkets`)

            dispatch(getSourceMarketsSuccess(sourceMarkets))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
