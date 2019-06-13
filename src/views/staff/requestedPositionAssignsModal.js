import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'
import moment from 'moment'

const styles = {
    th: {
        cursor: 'default'
    },
    td: {
        cursor: 'default',
        textDecoration: 'none'
    }
}

const RequestedPositionAssignsModal = props => {
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Pending Positions</ModalHeader>

                <ModalBody className="no-padding-bottom">
                    <div className="tui-text-content table-responsive">
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th style={styles.th}>Destination</th>
                                    <th style={styles.th}>Job Title</th>
                                    <th style={styles.th}>Start Date</th>
                                    <th style={styles.th}>End Date</th>
                                    <th />
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {props.positionAssigns.map((a, index) => (
                                    <tr key={index}>
                                        <td style={styles.destination}>{a.destination}</td>

                                        <td style={styles.td}>{a.jobTitle}</td>

                                        <td style={styles.td}>{moment(a.startDate).format('YYYY-MM-DD')}</td>

                                        <td style={styles.td}>{moment(a.endDate).format('YYYY-MM-DD')}</td>

                                        <td style={styles.td}>
                                            <Button onClick={() => props.accept(a.positionAssignId, true)} color="success">
                                                Accept
                                            </Button>
                                        </td>

                                        <td style={styles.td}>
                                            <Button onClick={() => props.accept(a.positionAssignId, false)} color="danger">
                                                Decline
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button color="danger" onClick={props.toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default RequestedPositionAssignsModal
