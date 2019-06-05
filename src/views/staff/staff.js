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
            secondApplication: {}
        }
    }

    async componentWillMount() {
        const manager = this.props.user && this.props.user.roles ? this.props.user.roles.includes(userRoles.Manager) : false
        let staff = null
        let resignHistory = null
        let disabled = false
        let managerIsStaff = false
        let positionAssigns = null
        let firstApplication = null
        let secondApplication = null

        if (manager === true && this.state.email) {
            staff = await this.props.staffActions.getStaffFromEmail(this.state.email)
            positionAssigns = await this.props.staffActions.getPositionAssignsFromEmail(this.state.email)
            resignHistory = await this.props.staffActions.getResignHistory(this.state.email)
            resignHistory.staffId = staff.staffId

            firstApplication = await this.props.applicationActions.getApplicationFromEmail(this.state.email, this.props.settings.nextSeason)
            secondApplication = await this.props.applicationActions.getApplicationFromEmail(this.state.email, this.props.settings.nextNextSeason)

            managerIsStaff = this.state.email === this.props.user.email
            disabled = this.state.email !== this.props.user.email
        } else {
            staff = await this.props.staffActions.getStaff()
            positionAssigns = await this.props.staffActions.getPositionAssigns()
            managerIsStaff = true

            firstApplication = await this.props.applicationActions.getApplication(this.props.settings.nextSeason)
            secondApplication = await this.props.applicationActions.getApplication(this.props.settings.nextNextSeason)
        }

        firstApplication.season = this.props.settings.nextSeason.trim()
        secondApplication.season = this.props.settings.nextNextSeason.trim()

        this.setState({ staff, resignHistory, disabled, manager, managerIsStaff, positionAssigns, firstApplication, secondApplication, loaded: true })
    }

    handleActiveTab = activeTab => {
        if (this.state.activeTab !== activeTab) {
            this.setState({
                activeTab
            })
        }
    }

    buildSaveModel = application => {
        let preferToWork = []

        if (application.preferToWork) {
            console.log('XXXXX', application.preferToWork)
            preferToWork = application.preferToWork.map(function(m) {
                return m.id
            })
        }

        let model = {
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
            couplePosition: application.couplePosition,
            changePosition: application.changePosition,
            coupleName: application.coupleName,
            coupleSourceMarket: application.coupleSourceMarket,
            developmentAreas: application.developmentAreas,
            signature: application.signature,
            placeDate: application.placeDate,
            mostImportant: application.mostImportant,
            nonDestinationPosition: application.nonDestinationPosition,
            skiPlacement: application.skiPlacement,
            fairs: application.fairs,
            comments: application.comments,
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
            overallRating: application.overallRating,
            longService: application.longService,
            disciplinary: application.disciplinary,
            supportRequest: application.supportRequest,
            supportRequestComment: application.supportRequestComment,
            changesRequest: application.changesRequest,
            feedBackRequest: application.feedBackRequest,
            placeDateMgr: application.placeDateMgr,
            signatureMgr: application.signatureMgr
        }

        return model
    }

    save = async () => {
        const firstApplication = this.buildSaveModel(this.state.firstApplication)
        const secondApplication = this.buildSaveModel(this.state.secondApplication)

        await this.props.applicationActions.save(firstApplication, secondApplication, this.state.manager)
    }

    toggleAssignRoleModal = () => {}

    render() {
        if (this.state.loaded === false) {
            return null
        }

        const jobFamiliesWork = this.props.settings.jobFamiliesWork ? this.props.settings.jobFamiliesWork.split(',') : []

        const firstApplicationVisible =
            this.props.settings.applyOpen === 'Yes' &&
            this.state.positionAssigns.followingPositionAssign !== null &&
            (jobFamiliesWork.length === 0 || jobFamiliesWork.includes(this.state.positionAssigns.followingPositionAssign.jobFamily))

        const secondApplicationVisible =
            this.props.settings.applyOpen === 'Yes' &&
            this.state.positionAssigns.nextPositionAssign !== null &&
            (jobFamiliesWork.length === 0 || jobFamiliesWork.includes(this.state.positionAssigns.nextPositionAssign.jobFamily))

        return (
            <div>
                <Tabs
                    activeTab={this.state.activeTab}
                    handleActiveTab={this.handleActiveTab}
                    applicationVisible={firstApplicationVisible === true || secondApplicationVisible === true}
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
                            firstApplicationVisible={firstApplicationVisible}
                            secondApplicationVisible={secondApplicationVisible}
                            keywords={this.props.keywords}
                            handleFirstApplicationInput={(field, val, _this) =>
                                handleApplication.handleApplicationInput('firstApplication', field, val, this)
                            }
                            sourceMarkets={this.props.sourceMarkets}
                            save={this.save}
                            toggleAssignRoleModal={this.toggleAssignRoleModal}
                        />
                    </TabPane>
                </TabContent>
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
