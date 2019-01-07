import React from 'react'
import { Row, Col } from 'reactstrap'

const Form = props => {
    if (!props.staff) {
        return (
            <div>
                <Row>
                    <Col sm="12" md="12" lg="12" xl="12" style={{ textAlign: 'center' }}>
                        <p style={{ color: '#fff' }}>Could not find staff</p>
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <div>
            <Row>
                <Col sm="12" md="12" lg="12" xl="12" style={{ textAlign: 'center' }}>
                    form here
                </Col>
            </Row>
        </div>
    )
}

export default Form
