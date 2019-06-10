import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Table } from 'reactstrap'
import Select from '../../components/select'
import Datetime from 'react-datetime'
import moment from 'moment'

class AssignRole extends Component {
    constructor() {
        super()

        this.state = {
            jobTitles: [],
            selectedDestination: null,
            selectedJobTitle: null,
            selectedStartDate: null,
            selectedEndDate: null,
            existingStartDate: null,
            existingEndDate: null,
            positionStartDate: null,
            positionEndDate: null,

            validDate: '',
            validDate2: ''
            //errorMessage:''
        }
    }

    destinationOnChange = destination => {
        const selectedDestination = destination != null ? destination.destination : null

        const dest = this.props.availablePositions.filter(ap => ap.destination === selectedDestination)[0]

        let jobTitles = []

        if (dest !== undefined) {
            jobTitles = dest.jobTitles
        }

        this.setState({
            selectedDestination,
            selectedJobTitle: null,
            // selectedStartDate: null,
            // selectedEndDate: null,
            positionStartDate: null,
            positionEndDate: null,
            jobTitles
        })
    }

    jobTitleOnChange = jobTitle => {
        const selectedJobTitle = jobTitle != null ? jobTitle.mplid : null
        const positionStartDate = jobTitle != null ? jobTitle.positionStartDate : null
        const positionEndDate = jobTitle != null ? jobTitle.positionEndDate : null
        this.setState({
            selectedJobTitle,
            positionStartDate,
            positionEndDate
        })
    }

    toggle = () => {
        this.setState({
            selectedDestination: null,
            selectedJobTitle: null,
            selectedStartDate: null,
            selectedEndDate: null,
            positionStartDate: null,
            positionEndDate: null,
            validDate2: '',
            validDate: ''
            //errorMessage:''
        })

        this.props.toggle()
    }

    assignStartChange = assignStart => {
        const selectedStartDate = assignStart

        this.setState({
            selectedStartDate,
            validDate2: ''
        })
    }

    assignEndChange = assignEnd => {
        const selectedEndDate = assignEnd

        this.setState({
            selectedEndDate,
            validDate2: ''
        })
    }

    assignRole = (mplid, val, val2, val3) => {
        const destination = this.props.availablePositions.filter(ap => ap.destination === this.state.selectedDestination)[0]

        const position = destination.jobTitles.filter(ap => ap.mplid === mplid)[0]

        var currentdate = new Date()

        var newdatemodified = moment(currentdate).format('YYYY-MM-DD HH:mm:ss')

        const model = {
            mplid: position.mplid,
            season: this.props.application.season,
            dateModified: newdatemodified,

            startDate: this.state.selectedStartDate ? this.state.selectedStartDate : val,
            endDate: this.state.selectedEndDate ? this.state.selectedEndDate : val2
        }

        var assignCompareStart = new Date(model.startDate).setHours(0, 0, 0, 0)
        var assignCompareEnd = new Date(model.endDate).setHours(0, 0, 0, 0)
        var positionCompareStart = new Date(this.state.positionStartDate)
        var positionCompareEnd = new Date(this.state.positionEndDate)

        // var existingStartDate = this.props.currentPositionAssign ? this.props.currentPositionAssign.StaffStartDate :'' ;
        // var existingStartDate = this.props.currentPositionAssign ? this.props.currentPositionAssign.StaffEndDate :'' ;

        var checkok = assignCompareStart >= positionCompareStart.getTime() && assignCompareEnd <= positionCompareEnd.getTime()
        var checkok2 = assignCompareStart < assignCompareEnd

        if (!checkok2) {
            this.setState({
                validDate2: 'Check assign dates',
                validDate: ''
            })
            return false
        } else {
            if (!checkok) {
                this.setState({
                    validDate: 'Assign dates does not match position dates',
                    validDate2: ''
                })

                return false
            }
        }

        this.toggle()

        this.props.assignRole(model)
    }

    render() {
        return (
            <div>
                <Modal size={'lg'} isOpen={this.props.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Assign Applicant To Position{this.state.selectedJobTitle}</ModalHeader>

                    <ModalBody className="no-padding-bottom">
                        <Row>
                            <Col sm="12" md="6" lg="6" xl="6">
                                <div className="form-group form-group-select">
                                    <label htmlFor="destination">Destination</label>

                                    <Select
                                        id="destination"
                                        valueKey="destination"
                                        labelKey="destination"
                                        className="form-control"
                                        options={this.props.availablePositions}
                                        onChange={this.destinationOnChange}
                                        value={this.state.selectedDestination}
                                        placeholder="Destination"
                                    />
                                </div>
                            </Col>

                            <Col sm="12" md="6" lg="6" xl="6">
                                <div className="form-group form-group-select">
                                    <label htmlFor="jobTitle">Position (MPLID - MPLSourceMarket - MPL_DL_Required)</label>

                                    <Select
                                        id="jobTitle"
                                        valueKey="mplid"
                                        labelKey="jobTitle"
                                        className="form-control"
                                        options={this.state.jobTitles}
                                        onChange={this.jobTitleOnChange}
                                        value={this.state.selectedJobTitle}
                                        disabled={this.state.selectedDestination === null}
                                        placeholder="Position"
                                    />
                                </div>
                            </Col>
                        </Row>

                        {this.state.selectedJobTitle !== null ? (
                            <Row>
                                <Col>
                                    <Table striped bordered responsive>
                                        <thead>
                                            <tr>
                                                <th>Assign StartDate</th> <th> Assign EndDate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Datetime
                                                        className={'custom-datepicker'}
                                                        id="assignStart"
                                                        defaultValue={moment(this.state.positionStartDate).format('YYYY-MM-DD')}
                                                        onChange={this.assignStartChange}
                                                        value={this.state.selectedStartDate}
                                                        timeFormat={false}
                                                        dateFormat="YYYY-MM-DD"
                                                        closeOnSelect
                                                        utc={true}
                                                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                                                    />
                                                    <b className="card-text text-danger">{this.state.validDate2}</b>
                                                </td>
                                                <td>
                                                    <Datetime
                                                        className={'custom-datepicker'}
                                                        onChange={this.assignEndChange}
                                                        value={this.state.selectedEndDate}
                                                        defaultValue={moment(this.state.positionEndDate).format('YYYY-MM-DD')}
                                                        timeFormat={false}
                                                        dateFormat="YYYY-MM-DD"
                                                        closeOnSelect
                                                        utc={true}
                                                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                                                    />
                                                    <b className="card-text text-danger">{this.state.validDate2}</b>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th>Position StartDate</th> <th> Position EndDate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {moment(this.state.positionStartDate).format('YYYY-MM-DD')}
                                                    <b className="card-text text-danger">{this.state.validDate}</b>
                                                </td>

                                                <td>
                                                    {moment(this.state.positionEndDate).format('YYYY-MM-DD')}
                                                    <b className="card-text text-danger">{this.state.validDate}</b>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        ) : (
                            ''
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            disabled={this.state.selectedJobTitle === null}
                            onClick={() =>
                                this.assignRole(
                                    this.state.selectedJobTitle,
                                    moment(this.state.positionStartDate).format('YYYY-MM-DD'),
                                    moment(this.state.positionEndDate).format('YYYY-MM-DD')
                                )
                            }
                            color="success">
                            Assign
                        </Button>{' '}
                        <Button color="danger" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default AssignRole
