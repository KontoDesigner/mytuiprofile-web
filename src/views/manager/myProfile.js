import React from 'react'
import { Row, Col } from 'reactstrap'

const MyProfile = props => {
    return (
        <div>
            <Row>
                <Col xl="12" lg="12" md="12" sm="12" xs="12" style={{ marginTop: '-10px', marginBottom: '5px' }}>
                    <div className="hr">
                        <span className="hr-title">My Profile</span>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm="12" md="12" lg="12" xl="12" style={{ textAlign: 'center' }}>
                    form here
                </Col>
            </Row>
        </div>
    )
}

export default MyProfile
