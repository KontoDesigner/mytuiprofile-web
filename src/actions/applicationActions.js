import { beginAjaxCall, ajaxCallError, endAjaxCall } from './ajaxStatusActions'
import restClient from '../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'
import moment from 'moment'

const BASE = 'application'

export function getRequestedPositionAssigns() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const positionAssigns = await restClient.get(`${BASE}/getrequestedpositionassigns`)

            dispatch(endAjaxCall())

            return positionAssigns
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function acceptOrDeclinePositionAssign(positionAssignId, accepted) {
    const body = {
        positionAssignId,
        accepted
    }

    const accept = accepted === true ? 'Accepted' : 'Declined'

    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const res = await restClient.post(`${BASE}/acceptordeclinepositionassign`, body)

            dispatch(endAjaxCall())

            if (res.ok === true) {
                toastr.success('Success', `${accept} position`)

                return true
            } else {
                toastr.error('Error', `Could not save choice`)

                return false
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getApplication(season) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            let application = await restClient.get(`${BASE}/${season}`)

            if (application && application.preferToWork && application.preferToWork !== '') {
                application.preferToWork = application.preferToWork.split(',').map(s => ({
                    id: s,
                    name: s
                }))
            }

            dispatch(endAjaxCall())

            return application
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getApplicationFromEmail(email, season) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const application = await restClient.get(`${BASE}/${email}/${season}`)

            if (application && application.preferToWork && application.preferToWork !== '') {
                application.preferToWork = application.preferToWork.split(',').map(s => ({
                    id: s,
                    name: s
                }))
            }

            dispatch(endAjaxCall())

            return application
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

function buildSaveModel(application) {
    var currentdate = new Date()

    var newdatemodified = moment(currentdate).format('YYYY-MM-DD HH:mm:ss')

    let model = {}

    model.EmpID = application.empId
    model.LastName = application.lastName
    model.FirstName = application.firstName
    model.Title = application.title
    model.Email = application.email
    model.SourceMarket = application.sourceMarket
    model.LocalSM = application.localSm
    model.Nat = application.nat
    model.Destination = application.destination

    model.DateModified = newdatemodified
    model.StaffID = application.staffID
    model.Status = application.status
    model.FirstDest = application.firstDest
    model.SecondDest = application.secondDest
    model.ThirdDest = application.thirdDest
    model.FourthDest = application.fourthDest
    model.FirstJobTitle = application.firstJobTitle
    model.SecondJobTitle = application.secondJobTitle
    model.ThirdJobTitle = application.thirdJobTitle
    model.FourthJobTitle = application.fourthJobTitle
    model.CouplePosition = application.couplePosition
    model.ChangePosition = application.changePosition
    model.CoupleName = application.coupleName
    model.CoupleSourceMarket = application.coupleSourceMarket
    model.Signature = application.signature
    model.PlaceDate = application.placeDate
    model.MostImportant = application.mostImportant
    model.NonDestinationPosition = application.nonDestinationPosition
    model.CoupleName = application.coupleName
    model.SkiPlacement = application.skiPlacement
    model.Fairs = application.fairs
    model.Comments = application.comments
    model.Season = application.season
    model.RemarksChoice1 = application.remarksChoice1
    model.RemarksChoice2 = application.remarksChoice2
    model.RemarksChoice3 = application.remarksChoice3
    model.RemarksChoice4 = application.remarksChoice4
    model.PlanToResign = application.planToResign
    model.Jump = application.jump
    model.ChangeJobFamily = application.changeJobFamily
    model.SupportChange = application.supportChange
    model.TopStrengths = application.topStrengths
    model.DevelopmentAreas = application.developmentAreas
    model.MidYearReview = application.midYearReview
    model.MidYearRating = application.midYearRating
    model.OverallRating = application.overallRating
    model.LongService = application.longService
    model.Disciplinary = application.disciplinary
    model.SupportRequest = application.supportRequest
    model.SupportRequestComment = application.supportRequestComment
    model.ChangesRequest = application.changesRequest
    model.FeedBackRequest = application.feedBackRequest
    model.PlaceDateMgr = application.placeDateMgr
    model.SignatureMgr = application.signatureMgr
    model.PreferToWork = application.preferToWork ? application.preferToWork.join() : null
    model.EarlyPerformanceCheck = application.earlyPerformanceCheck

    return model
}

export function save(firstApplication, secondApplication, manager) {
    const firstModel = buildSaveModel(firstApplication)
    const secondModel = buildSaveModel(secondApplication)

    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            let firstRes = null
            let secondRes = null

            if (manager) {
                firstRes = await restClient.post(`${BASE}/manager`, firstModel)
                secondRes = await restClient.post(`${BASE}/manager`, secondModel)
            } else {
                firstRes = await restClient.post(`${BASE}`, firstModel)
                secondRes = await restClient.post(`${BASE}`, secondModel)
            }

            dispatch(endAjaxCall())

            if (firstRes.ok === true && secondRes.ok === true) {
                toastr.success('Success', 'Thank you for your application')

                return true
            } else {
                toastr.error('Error', `Could not save application: Error`)

                return false
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
