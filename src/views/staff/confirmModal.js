import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'

const ConfirmModal = props => {
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Confirm Send Application</ModalHeader>

                <ModalBody className="no-padding-bottom">
                    <Alert style={{ marginBottom: '15px' }} color="danger">
                        Are you sure you want to send in your application?
                        <br />
                        <br />
                        Once you have pressed the 'Send' button below, you cannot go back and update this application form!
                    </Alert>
                </ModalBody>

                <ModalFooter>
                    <Button color="success" onClick={props.save}>
                        Send
                    </Button>
                    <Button color="danger" onClick={props.toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ConfirmModal
