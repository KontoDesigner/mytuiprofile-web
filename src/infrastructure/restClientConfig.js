let baseUrl = ''
const hostName = window.location.hostname

//LOCAL
if (hostName === 'localhost') {
    baseUrl = 'http://localhost:5000'
    // baseUrl = 'https://mytuiprofile-api-uat.tuinordic.net'
}
//UAT
else if (hostName === 'mytuiprofile-web-uat.tuinordic.net' || hostName === 'mytuiprofile-web-uat.tuinordic.net') {
    baseUrl = 'https://mytuiprofile-api-uat.tuinordic.net'
}
//PROD
else if (hostName === 'mytuiprofile-web.tuinordic.net') {
    baseUrl = 'https://mytuiprofile-api.tuinordic.net'
} else {
    console.warn(`could not identify hostname: ${hostName}.`)
}

export const restClientConfig = {
    baseUrl: baseUrl
}

export default restClientConfig
