import axios from 'axios'
import { adalApiFetch } from './adalConfig'
import { restClientConfig } from './restClientConfig'
import { toastr } from 'react-redux-toastr'

class RestClient {
    static async get(url) {
        let baseUrl = `${restClientConfig.baseUrl}/`

        var axiosInstance = axios.create({
            baseURL: baseUrl
        })
        try {
            console.log(`RestClient [GET] ${baseUrl + url}`)
            let response = await adalApiFetch(axiosInstance, baseUrl + url, {})

            return response.data
        } catch (err) {
            toastr.error('Error', `An unexpected error has occured: ${err}.`)

            console.warn(err)
        }
    }

    static async delete(url, data) {
        let baseUrl = `${restClientConfig.baseUrl}/`

        var axiosInstance = axios.create({
            baseURL: baseUrl
        })
        try {
            console.log(`RestClient [DELETE] ${baseUrl + url}`, data)

            let settings = {
                headers: {
                    Accept: 'Application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    Authorization: ''
                },
                data: JSON.stringify(data),
                method: 'DELETE'
            }

            let response = await adalApiFetch(axiosInstance, baseUrl + url, settings)

            return response.data
        } catch (err) {
            toastr.error('Error', `An unexpected error has occured: ${err}.`)

            console.warn(err)
        }
    }

    static async post(url, data) {
        let baseUrl = `${restClientConfig.baseUrl}/`

        var axiosInstance = axios.create({
            baseURL: baseUrl
        })
        try {
            console.log(`RestClient [POST] ${baseUrl + url}`, data)

            let settings = {
                headers: {
                    Accept: 'Application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    Authorization: ''
                },
                data: JSON.stringify(data),
                method: 'POST'
            }

            let response = await adalApiFetch(axiosInstance, baseUrl + url, settings)

            return response.data
        } catch (err) {
            toastr.error('Error', `An unexpected error has occured: ${err}.`)

            console.warn(err)
        }
    }

    static async put(url, data) {
        let baseUrl = `${restClientConfig.baseUrl}/`

        var axiosInstance = axios.create({
            baseURL: baseUrl
        })
        try {
            console.log(`RestClient [PUT] ${baseUrl + url}`, data)

            let settings = {
                headers: {
                    Accept: 'Application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    Authorization: ''
                },
                data: JSON.stringify(data),
                method: 'PUT'
            }

            let response = await adalApiFetch(axiosInstance, baseUrl + url, settings)

            return response.data
        } catch (err) {
            toastr.error('Error', `An unexpected error has occured: ${err}.`)

            console.warn(err)
        }
    }
}

export default RestClient
