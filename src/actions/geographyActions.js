import { ActionTypes as types } from '../constants/geographyConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from './ajaxStatusActions'
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

export function getF2wUrlSuccess(f2wUrl) {
    return {
        type: types.GET_F2WURL_SUCCESS,
        data: { f2wUrl: f2wUrl }
    }
}

export function getF2wUrl() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const f2wUrl = await restClient.get(`geography/getf2wurl`)

            dispatch(getF2wUrlSuccess(f2wUrl))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getSettingsSuccess(settings) {
    return {
        type: types.GET_SETTINGS_SUCCESS,
        data: { settings: settings }
    }
}

export function getSettings() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const settings = await restClient.get(`geography/getsettings`)

            dispatch(getSettingsSuccess(settings))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getKeywordsSuccess(keywords) {
    return {
        type: types.GET_KEYWORDS_SUCCESS,
        data: { keywords: keywords }
    }
}

export function getKeywords() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const keywords = await restClient.get(`geography/getkeywords`)

            dispatch(getKeywordsSuccess(keywords))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getDestinationsBySeason(season) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const destinations = await restClient.get(`geography/getdestinationsbyseason/${season}`)

            return destinations
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getDestinationsByJobFamily(jobfamily) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const destinations = await restClient.get(`geography/getdestinationsbyjobfamily/${jobfamily}`)

            dispatch(endAjaxCall())

            return destinations
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getJobTitlesByJobFamilyAndSourceMarket(jobFamily, sourceMarket) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const jobTitles = await restClient.get(`geography/getjobtitles/${jobFamily}/${sourceMarket}`)

            dispatch(endAjaxCall())

            return jobTitles
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
