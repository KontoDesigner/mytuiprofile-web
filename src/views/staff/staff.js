import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ajaxStatusActions from '../../actions/ajaxStatusActions'
import { UserRoles as userRoles } from '../../constants/userConstants'
import Profile from './profile'
import * as staffActions from '../../actions/staffActions'
import * as handleStaff from '../../components/handleStaff'
import * as handleApplication from '../../components/handleApplication'
import * as applicationActions from '../../actions/applicationActions'
import Tabs from './tabs'
import { TabContent, TabPane } from 'reactstrap'
import Application from './application'
import RequestedPositionAssignsModal from './requestedPositionAssignsModal'

class Staff extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            email: props.match ? props.match.params.email : undefined,
            staff: null,
            disabled: false,
            manager: false,
            managerIsStaff: false,
            positionAssigns: null,
            activeTab: 'profile',
            firstApplication: {},
            secondApplication: {},
            requestedPositionAssignsModel: false,
            created: false
        }
    }

    async componentWillMount() {
        const manager = this.props.user && this.props.user.roles ? this.props.user.roles.includes(userRoles.Manager) : false
        let staff = null
        let resignHistory = null
        let disabled = false
        let managerIsStaff = false
        let firstApplication = null
        let secondApplication = null
        let requestedPositionAssigns = []
        await this.getPositionAssigns(manager)

        if (manager === true && this.state.email) {
            staff = await this.props.staffActions.getStaffFromEmail(this.state.email)
            resignHistory = await this.props.staffActions.getResignHistory(this.state.email)
            resignHistory.staffId = staff.staffId

            firstApplication = await this.props.applicationActions.getApplicationFromEmail(this.state.email, this.props.settings.nextSeason)
            secondApplication = await this.props.applicationActions.getApplicationFromEmail(this.state.email, this.props.settings.nextNextSeason)

            managerIsStaff = this.state.email === this.props.user.email
            disabled = this.state.email !== this.props.user.email
        } else {
            staff = await this.props.staffActions.getStaff()
            managerIsStaff = true

            firstApplication = await this.props.applicationActions.getApplication(this.props.settings.nextSeason)
            secondApplication = await this.props.applicationActions.getApplication(this.props.settings.nextNextSeason)
            requestedPositionAssigns = await this.props.applicationActions.getRequestedPositionAssigns()
        }

        firstApplication.season = this.props.settings.nextSeason.trim()
        firstApplication.staffID = staff.staffId
        secondApplication.season = this.props.settings.nextNextSeason.trim()
        secondApplication.staffID = staff.staffId

        const requestedPositionAssignsModel = requestedPositionAssigns.length > 0

        this.setState({
            staff,
            created: firstApplication.created,
            resignHistory,
            disabled,
            manager,
            managerIsStaff,
            firstApplication,
            secondApplication,
            requestedPositionAssigns,
            requestedPositionAssignsModel,
            loaded: true
        })
    }

    getPositionAssigns = async manager => {
        let positionAssigns = null

        if (manager === true && this.state.email) {
            positionAssigns = await this.props.staffActions.getPositionAssignsFromEmail(this.state.email)
        } else {
            positionAssigns = await this.props.staffActions.getPositionAssigns()
        }

        this.setState({
            positionAssigns
        })
    }

    getAvailableCandidates = async () => {
        const availableCandidates = await this.props.applicationActions.getAvailableCandidates()

        this.setState({
            availableCandidates
        })
    }

    handleActiveTab = activeTab => {
        if (this.state.activeTab !== activeTab) {
            this.setState({
                activeTab
            })
        }
    }

    buildSaveModel = (application, firstApplication) => {
        let preferToWork = []

        if (application.preferToWork && application.preferToWork !== '') {
            preferToWork = application.preferToWork.map(function(m) {
                return m.id
            })
        }

        let destination = null

        if (this.state.positionAssigns.currentPositionAssign) {
            destination = this.state.positionAssigns.currentPositionAssign.destination
        }

        let model = {
            //Staff
            empId: this.state.staff.empId,
            lastName: this.state.staff.lastName,
            firstName: this.state.staff.firstName,
            title: this.state.staff.title,
            email: this.state.staff.email,
            sourceMarket: this.state.staff.sourceMarket,
            localS: this.state.staff.localSm,
            nat: this.state.staff.nat,
            destination: destination,

            //General
            changePosition: firstApplication.changePosition,
            nonDestinationPosition: firstApplication.nonDestinationPosition,
            coupleName: firstApplication.coupleName,
            couplePosition: firstApplication.couplePosition,
            coupleSourceMarket: firstApplication.coupleSourceMarket,
            mostImportant: firstApplication.mostImportant,
            skiPlacement: firstApplication.skiPlacement,
            fairs: firstApplication.fairs,
            comments: firstApplication.comments,
            signature: firstApplication.signature,
            placeDate: firstApplication.placeDate,

            //Season
            preferToWork: preferToWork,
            staffID: application.staffID,
            status: application.status,
            firstDest: application.firstDest,
            secondDest: application.secondDest,
            thirdDest: application.thirdDest,
            fourthDest: application.fourthDest,
            firstJobTitle: application.firstJobTitle,
            secondJobTitle: application.secondJobTitle,
            thirdJobTitle: application.thirdJobTitle,
            fourthJobTitle: application.fourthJobTitle,
            developmentAreas: application.developmentAreas,
            season: application.season,
            remarksChoice1: application.remarksChoice1,
            remarksChoice2: application.remarksChoice2,
            remarksChoice3: application.remarksChoice3,
            remarksChoice4: application.remarksChoice4,
            planToResign: application.planToResign,
            jump: application.jump,
            changeJobFamily: application.changeJobFamily,
            supportChange: application.supportChange,
            topStrengths: application.topStrengths,
            midYearReview: application.midYearReview,
            midYearRating: application.midYearRating,
            longService: application.longService,
            disciplinary: application.disciplinary,
            supportRequest: application.supportRequest,
            supportRequestComment: application.supportRequestComment,
            changesRequest: application.changesRequest,
            feedBackRequest: application.feedBackRequest,
            placeDateMgr: application.placeDateMgr,
            signatureMgr: application.signatureMgr
        }

        if (application.midYearReview && application.midYearRating) {
            model.overallRating = application.midYearReview * application.midYearRating
        }

        return model
    }

    save = async () => {
        const firstApplication = this.buildSaveModel(this.state.firstApplication, this.state.firstApplication)
        const secondApplication = this.buildSaveModel(this.state.secondApplication, this.state.firstApplication)

        const res = await this.props.applicationActions.save(firstApplication, secondApplication, this.state.manager)

        if (res === true && this.state.manager === false) {
            this.setState({
                created: true
            })
        }
    }

    toggleRequestedPositionAssignsModel = () => {
        this.setState({
            requestedPositionAssignsModel: !this.state.requestedPositionAssignsModel
        })
    }

    acceptOrDeclinePositionAssign = async (positionAssignId, accepted) => {
        await this.props.applicationActions.acceptOrDeclinePositionAssign(positionAssignId, accepted)

        const requestedPositionAssigns = await this.props.applicationActions.getRequestedPositionAssigns()

        this.setState({
            requestedPositionAssigns,
            requestedPositionAssignsModel: requestedPositionAssigns.length > 0
        })
    }

    render() {
        if (this.state.loaded === false) {
            return null
        }

        const jobFamiliesWork = this.props.settings.jobFamiliesWork ? this.props.settings.jobFamiliesWork.split(',') : []

        const applicationVisible =
            this.props.settings.applyOpen === 'Yes' &&
            (jobFamiliesWork.length === 0 || jobFamiliesWork.includes(this.state.positionAssigns.currentPositionAssign.jobFamily))

        const managerAndNotCreated = this.state.manager && this.state.managerIsStaff !== true && this.state.created === false ? true : false

        return (
            <div>
                <Tabs
                    activeTab={this.state.activeTab}
                    handleActiveTab={this.handleActiveTab}
                    applicationVisible={applicationVisible && !managerAndNotCreated}
                />

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="profile">
                        <Profile
                            managerIsStaff={this.state.managerIsStaff}
                            manager={this.state.manager}
                            resignStaff={() => this.props.staffActions.resignStaff(this.state.resignHistory)}
                            updateStaff={() => this.props.staffActions.updateStaff(this.state.staff)}
                            disabled={this.state.disabled}
                            staff={this.state.staff}
                            positionAssigns={this.state.positionAssigns}
                            resignHistory={this.state.resignHistory}
                            jobTitles={this.props.jobTitles}
                            sourceMarkets={this.props.sourceMarkets}
                            handleStaffField={(e, _this) => handleStaff.handleStaffField(e, this)}
                            handleStaffSelect={(field, val, selector, _this) => handleStaff.handleStaffSelect(field, val, selector, this)}
                            handleStaffMultiSelect={(field, val, selector, _this) => handleStaff.handleStaffMultiSelect(field, val, selector, this)}
                            handleStaffDatePicker={(field, date, _this) => handleStaff.handleStaffDatePicker(field, date, this)}
                            handleResignHistoryField={(e, _this) => handleStaff.handleResignHistoryField(e, this)}
                            handleResignHistorySelect={(field, val, selector, _this) =>
                                handleStaff.handleResignHistorySelect(field, val, selector, this)
                            }
                            handleResignHistoryDatePicker={(field, date, _this) => handleStaff.handleResignHistoryDatePicker(field, date, this)}
                        />
                    </TabPane>

                    <TabPane tabId="application">
                        <Application
                            firstApplication={this.state.firstApplication}
                            secondApplication={this.state.secondApplication}
                            managerIsStaff={this.state.managerIsStaff}
                            manager={this.state.manager}
                            destinations={this.props.destinations}
                            handleFirstApplicationSelect={(field, val, selector, _this) =>
                                handleApplication.handleApplicationSelect('firstApplication', field, val, selector, this)
                            }
                            handleFirstApplicationMultiSelect={(field, val, _this) =>
                                handleApplication.handleApplicationMultiSelect('firstApplication', field, val, this)
                            }
                            handleSecondApplicationSelect={(field, val, selector, _this) =>
                                handleApplication.handleApplicationSelect('secondApplication', field, val, selector, this)
                            }
                            handleSecondApplicationMultiSelect={(field, val, _this) =>
                                handleApplication.handleApplicationMultiSelect('secondApplication', field, val, this)
                            }
                            jobTitles={this.props.jobTitles}
                            settings={this.props.settings}
                            applicationVisible={applicationVisible}
                            keywords={this.props.keywords}
                            handleFirstApplicationInput={(field, val, _this) =>
                                handleApplication.handleApplicationInput('firstApplication', field, val, this)
                            }
                            sourceMarkets={this.props.sourceMarkets}
                            save={this.save}
                            created={this.state.created}
                            toggleRequestedPositionAssignsModel={this.toggleRequestedPositionAssignsModel}
                            pendingPositionAssigns={this.state.requestedPositionAssigns.length > 0}
                        />
                    </TabPane>
                </TabContent>

                <RequestedPositionAssignsModal
                    positionAssigns={this.state.requestedPositionAssigns}
                    modal={this.state.requestedPositionAssignsModel}
                    toggle={this.toggleRequestedPositionAssignsModel}
                    accept={this.acceptOrDeclinePositionAssign}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sourceMarkets: state.geography.sourceMarkets,
        jobTitles: state.geography.jobTitles,
        user: state.user,
        settings: state.geography.settings,
        destinations: state.geography.destinations,
        keywords: state.geography.keywords
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ajaxStatusActions: bindActionCreators(ajaxStatusActions, dispatch),
        staffActions: bindActionCreators(staffActions, dispatch),
        applicationActions: bindActionCreators(applicationActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Staff)
