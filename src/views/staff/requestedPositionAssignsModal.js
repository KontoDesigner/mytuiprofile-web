import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Label, Input } from 'reactstrap'
import moment from 'moment'
import Select from '../../components/select'

const styles = {
    th: {
        cursor: 'default'
    },
    td: {
        cursor: 'default',
        textDecoration: 'none'
    }
}

const acceptOptions = [
    {
        id: 'Accept',
        name: 'Accept'
    },
    {
        id: 'Decline',
        name: 'Decline'
    }
]

const declineReasons = [
    {
        id: 'Plan to Resign',
        name: 'Plan to Resign'
    },
    {
        id: 'Want 2nd Offer',
        name: 'Want 2nd Offer'
    }
]

class RequestedPositionAssignsModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            forms: props.positionAssigns.map((positionAssign, index) => ({
                accept: null,
                positionAssign,
                declineReason: null,
                declineComment: '',
                hidden: false,
                index
            }))
        }
    }

    handleFormSelect = (field, val, selector, index) => {
        const id = val != null ? val[selector] : undefined

        let forms = Object.assign([], this.state.forms)
        forms[index][field] = id

        if (field === 'accept') {
            forms[index].declineReason = null
            forms[index].declineComment = ''
        }

        if (field === 'declineReason') {
            forms[index].declineComment = ''
        }

        this.setState({ forms })
    }

    handleFormField = (field, event, index) => {
        const val = event.target.value

        let forms = Object.assign([], this.state.forms)
        forms[index][field] = val

        this.setState({ forms })
    }

    disabled = form => {
        if (!form.accept || form.accept === '') {
            return true
        }

        if (form.accept === 'Decline' && (!form.declineReason || form.declineReason === '')) {
            return true
        }

        if (form.accept === 'Decline' && form.declineReason === 'Want a second offer' && (!form.declineComment || form.declineComment === '')) {
            return true
        }

        return false
    }

    accept = async item => {
        const res = await this.props.accept(item)

        if (res === true) {
            let forms = Object.assign([], this.state.forms)

            forms[item.index].hidden = true

            this.setState({ forms })
        }
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>Pending Positions</ModalHeader>

                    <ModalBody className="no-padding-bottom">
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th style={styles.th}>Destination</th>
                                    <th style={styles.th}>Job Title</th>
                                    <th style={styles.th}>Concept Unit</th>
                                    <th style={styles.th}>Start Date</th>
                                    <th style={styles.th}>End Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.forms
                                    .filter(m => m.hidden !== true)
                                    .map(item => (
                                        <React.Fragment key={item.index}>
                                            <tr>
                                                <td style={styles.destination}>{item.positionAssign.destination}</td>

                                                <td style={styles.td}>{item.positionAssign.jobTitle}</td>

                                                <td style={styles.td}>{item.positionAssign.conceptHotel}</td>

                                                <td style={styles.td}>{moment(item.positionAssign.startDate).format('YYYY-MM-DD')}</td>

                                                <td style={styles.td}>{moment(item.positionAssign.endDate).format('YYYY-MM-DD')}</td>

                                                <td style={{ minWidth: '250px' }}>
                                                    <Select
                                                        isClearable={true}
                                                        valueKey="id"
                                                        labelKey="name"
                                                        options={acceptOptions}
                                                        onChange={v => {
                                                            this.handleFormSelect('accept', v, 'id', item.index)
                                                        }}
                                                        value={item.accept}
                                                        placeholder="Select"
                                                        className="form-group form-group-select"
                                                    />
                                                </td>
                                            </tr>
                                            {item.accept === 'Decline' && (
                                                <React.Fragment>
                                                    <tr>
                                                        <td colSpan="6">
                                                            We are sorry to hear that you wish to decline this Placement offer. We would like to
                                                            understand the reasons for your wish to decline, so that we can begin to proceed with
                                                            planning your second review. Please can you select a reason from the following options
                                                        </td>

                                                        <td colSpan="1" style={{ minWidth: '250px' }}>
                                                            <Select
                                                                isClearable={true}
                                                                valueKey="id"
                                                                labelKey="name"
                                                                options={declineReasons}
                                                                onChange={v => {
                                                                    this.handleFormSelect('declineReason', v, 'id', item.index)
                                                                }}
                                                                value={item.declineReason}
                                                                placeholder="Select"
                                                                className="form-group form-group-select"
                                                            />
                                                        </td>
                                                    </tr>

                                                    {item.declineReason === 'Want a second offer' && (
                                                        <tr>
                                                            <td colSpan="7">
                                                                <Label for={`declineComment[${item.index}]`}>Comment</Label>
                                                                <Input
                                                                    required
                                                                    type="textarea"
                                                                    name={`declineComment[${item.index}]`}
                                                                    id={`declineComment[${item.index}]`}
                                                                    rows={4}
                                                                    value={item.declineComment}
                                                                    onChange={v => this.handleFormField('declineComment', v, item.index)}
                                                                    aria-multiline="true"
                                                                />
                                                            </td>
                                                        </tr>
                                                    )}
                                                </React.Fragment>
                                            )}

                                            <tr>
                                                <td style={{ textAlign: 'center' }} colSpan="7">
                                                    <Button
                                                        disabled={this.disabled(item)}
                                                        style={{ marginRight: '10px', marginBottom: '10px' }}
                                                        onClick={() => this.accept(item)}
                                                        color="success">
                                                        Send
                                                    </Button>
                                                    <Button
                                                        color="danger"
                                                        style={{ marginRight: '10px', marginBottom: '10px' }}
                                                        onClick={this.props.toggle}>
                                                        Close
                                                    </Button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                            </tbody>
                        </Table>
                    </ModalBody>

                    <ModalFooter>
                        {/* <Button color="danger" onClick={this.props.toggle}>
                            Close
                        </Button> */}
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default RequestedPositionAssignsModal
