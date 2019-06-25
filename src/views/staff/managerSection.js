import React from 'react'
import { Card, CardBody, CardHeader, Col, Label, Input } from 'reactstrap'
import Select from '../../components/select'
import TextInput from '../../components/textInput'

const ManagerSection = props => {
    return (
        <Card>
            <CardHeader className="card-header-work"> Manager Section (filled in by the manager of the applicant)</CardHeader>
            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        <label htmlFor="planToResign">This employee is planning to resign at the end of season?</label>

                        <Select
                            //  multi={true}
                            id="planToResign"
                            valueKey="id"
                            labelKey="name"
                            options={props.yesNo}
                            onChange={v => {
                                props.handleSelect('planToResign', v, 'id')
                            }}
                            value={props.application.planToResign}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                        {(!props.application.planToResign || props.application.planToResign === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
                    </Col>
                    {props.application.planToResign !== 'Yes' && (
                        <React.Fragment>
                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <label htmlFor="jump">Employee is a member of the JUMP program or soon start </label>

                                <Select
                                    //  multi={true}
                                    id="jump"
                                    valueKey="id"
                                    labelKey="name"
                                    options={props.yesNo}
                                    onChange={v => {
                                        props.handleSelect('jump', v, 'id')
                                    }}
                                    value={props.application.jump}
                                    placeholder="Select"
                                    className="form-group form-group-select"
                                />
                                {(!props.application.jump || props.application.jump === '') && (
                                    <b className="card-text text-danger">Field is required</b>
                                )}
                            </Col>

                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <label htmlFor="changeJobFamily">Employee requested a change to their jobfamily? </label>

                                <Select
                                    //  multi={true}
                                    id="changeJobFamily"
                                    valueKey="id"
                                    labelKey="name"
                                    options={props.yesNo}
                                    onChange={v => {
                                        props.handleSelect('changeJobFamily', v, 'id')
                                    }}
                                    value={props.application.changeJobFamily}
                                    placeholder="Select"
                                    className="form-group form-group-select"
                                />
                                {(!props.application.changeJobFamily || props.application.changeJobFamily === '') && (
                                    <b className="card-text text-danger">Field is required</b>
                                )}
                            </Col>
                        </React.Fragment>
                    )}
                </div>
                {props.application.planToResign !== 'Yes' && (
                    <React.Fragment>
                        <div className="form-row">
                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <Label for="supportChange">If yes, why do you support the request to change?</Label>
                                <Input
                                    required
                                    type="textarea"
                                    //maxLength="1000"
                                    name="supportChange"
                                    id="supportChange"
                                    rows={10}
                                    value={props.application.supportChange ? props.application.supportChange : ''}
                                    onChange={v => props.handleInputField('supportChange', v)}
                                    aria-multiline="true"
                                />
                            </Col>
                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <Label for="topStrengths">The employee's top 3 strengths:</Label>
                                <Input
                                    required
                                    type="textarea"
                                    //maxLength="1000"
                                    name="topStrengths"
                                    id="topStrengths"
                                    rows={10}
                                    value={props.application.topStrengths ? props.application.topStrengths : ''}
                                    onChange={v => props.handleInputField('topStrengths', v)}
                                    aria-multiline="true"
                                />
                                {(!props.application.topStrengths || props.application.topStrengths === '') && (
                                    <b className="card-text text-danger">Field is required</b>
                                )}
                            </Col>
                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <Label for="developmentAreas">Any areas of development?</Label>
                                <Input
                                    required
                                    type="textarea"
                                    //maxLength="1000"
                                    name="developmentAreas"
                                    id="developmentAreas"
                                    rows={10}
                                    value={props.application.developmentAreas ? props.application.developmentAreas : ''}
                                    onChange={v => props.handleInputField('developmentAreas', v)}
                                    aria-multiline="true"
                                />
                                {(!props.application.developmentAreas || props.application.developmentAreas === '') && (
                                    <b className="card-text text-danger">Field is required</b>
                                )}
                            </Col>
                        </div>
                        <div className="form-row">
                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <label htmlFor="midYearReview">Mid-Year review objective rating: </label>

                                <Select
                                    //  multi={true}
                                    id="midYearReview"
                                    valueKey="id"
                                    labelKey="name"
                                    options={props.midYearReview}
                                    onChange={v => {
                                        props.handleSelect('midYearReview', v, 'id')
                                    }}
                                    value={props.application.midYearReview}
                                    placeholder="Select"
                                    className="form-group form-group-select"
                                />
                            </Col>
                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <label htmlFor="midYearRating">Mid-Year TUI values rating </label>

                                <Select
                                    //  multi={true}
                                    id="midYearRating"
                                    valueKey="id"
                                    labelKey="name"
                                    options={props.midYearTui}
                                    onChange={v => {
                                        props.handleSelect('midYearRating', v, 'id')
                                    }}
                                    value={props.application.midYearRating}
                                    placeholder="Select"
                                    className="form-group form-group-select"
                                />
                            </Col>
                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <TextInput
                                    name="overallRating"
                                    label="Overall Placements Rating"
                                    placeholder="-Rating-"
                                    disabled
                                    value={
                                        parseFloat(props.application.midYearReview ? props.application.midYearReview : 0) +
                                        parseFloat(props.application.midYearRating ? props.application.midYearRating : 0)
                                    }
                                />
                            </Col>
                        </div>
                        <div className="form-row">
                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <label htmlFor="earlyPerformanceCheck">New Recruits - Early Performance Check </label>

                                <Select
                                    //  multi={true}
                                    id="earlyPerformanceCheck"
                                    valueKey="id"
                                    labelKey="name"
                                    options={props.earlyPerformance}
                                    onChange={v => {
                                        props.handleSelect('earlyPerformanceCheck', v, 'id')
                                    }}
                                    value={props.application.earlyPerformanceCheck}
                                    placeholder="Select"
                                    className="form-group form-group-select"
                                />
                            </Col>

                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <label htmlFor="longService">Long Service, 3rd calendar year or longer in the current job family</label>

                                <Select
                                    //  multi={true}
                                    id="longService"
                                    valueKey="id"
                                    labelKey="name"
                                    options={props.yesNo}
                                    onChange={v => {
                                        props.handleSelect('longService', v, 'id')
                                    }}
                                    value={props.application.longService}
                                    placeholder="Select"
                                    className="form-group form-group-select"
                                />
                                {(!props.application.longService || props.application.longService === '') && (
                                    <b className="card-text text-danger">Field is required</b>
                                )}
                            </Col>

                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <label htmlFor="disciplinary">Does the employee have a current/valid Disciplinary or Warning? </label>

                                <Select
                                    //  multi={true}
                                    id="disciplinary"
                                    valueKey="id"
                                    labelKey="name"
                                    options={props.yesNo}
                                    onChange={v => {
                                        props.handleSelect('disciplinary', v, 'id')
                                    }}
                                    value={props.application.disciplinary}
                                    placeholder="Select"
                                    className="form-group form-group-select"
                                />
                                {(!props.application.disciplinary || props.application.disciplinary === '') && (
                                    <b className="card-text text-danger">Field is required</b>
                                )}
                            </Col>

                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <label htmlFor="supportRequest">Do you support the placements request? (if no please specify)</label>

                                <Select
                                    //  multi={true}
                                    id="supportRequest"
                                    valueKey="id"
                                    labelKey="name"
                                    options={props.yesNo}
                                    onChange={v => {
                                        props.handleSelect('supportRequest', v, 'id')
                                    }}
                                    value={props.application.supportRequest}
                                    placeholder="Select"
                                    className="form-group form-group-select"
                                />
                                {(!props.application.supportRequest || props.application.supportRequest === '') && (
                                    <b className="card-text text-danger">Field is required</b>
                                )}
                            </Col>
                        </div>
                        <div className="form-row">
                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <Label for="supportRequestComment">If you answered no to the above question please provide details</Label>
                                <Input
                                    required
                                    type="textarea"
                                    //maxLength="1000"
                                    name="supportRequestComment"
                                    id="supportRequestComment"
                                    rows={4}
                                    value={props.application.supportRequestComment ? props.application.supportRequestComment : ''}
                                    onChange={v => props.handleInputField('supportRequestComment', v)}
                                    aria-multiline="true"
                                />
                                {(!props.application.supportRequestComment || props.application.supportRequestComment === '') &&
                                    props.application.supportRequest === 'No' && <b className="card-text text-danger">Field is required</b>}
                            </Col>

                            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                                <label htmlFor="changesRequest">
                                    In agreement with the employee have you made any changes to their application form?{' '}
                                </label>

                                <Select
                                    //  multi={true}
                                    id="changesRequest"
                                    valueKey="id"
                                    labelKey="name"
                                    options={props.yesNo}
                                    onChange={v => {
                                        props.handleSelect('changesRequest', v, 'id')
                                    }}
                                    value={props.application.changesRequest}
                                    placeholder="Select"
                                    className="form-group form-group-select"
                                />
                                {(!props.application.changesRequest || props.application.changesRequest === '') && (
                                    <b className="card-text text-danger">Field is required</b>
                                )}
                            </Col>
                        </div>
                    </React.Fragment>
                )}
            </CardBody>
            <CardHeader className="card-header-work">
                Confirm - Please Note! Make sure that you print these comments. Once you have informed the employee and pressed the 'Save & Close'
                button, you cannot go back and modify or read these comments again.
            </CardHeader>
            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        <label htmlFor="feedBackRequest">I have informed or will inform the employee of my feedback</label>

                        <Select
                            //  multi={true}
                            id="feedBackRequest"
                            valueKey="id"
                            labelKey="name"
                            options={props.yesNo}
                            onChange={v => {
                                props.handleSelect('feedBackRequest', v, 'id')
                            }}
                            value={props.application.feedBackRequest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                        {(!props.application.feedBackRequest || props.application.feedBackRequest === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
                        {props.application.feedBackRequest === 'No' && <b className="card-text text-danger">Employee must be informed</b>}
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        <TextInput
                            id="signatureMgr"
                            name="signatureMgr"
                            label="signatureMgr"
                            value={props.application.signatureMgr}
                            onChange={v => props.handleInputField('signatureMgr', v)}
                        />
                        {(!props.application.signatureMgr || props.application.signatureMgr === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        <TextInput
                            id="placeDateMgr"
                            name="placeDateMgr"
                            label="Place & Date"
                            value={props.application.placeDateMgr}
                            onChange={v => props.handleInputField('placeDateMgr', v)}
                        />
                        {(!props.application.placeDateMgr || props.application.placeDateMgr === '') && (
                            <b className="card-text text-danger">Field is required</b>
                        )}
                    </Col>
                </div>
            </CardBody>
        </Card>
    )
}

export default ManagerSection
