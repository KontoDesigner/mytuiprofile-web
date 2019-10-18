import React, { Component } from 'react'
import './styles/site.css'

const styles = {
    p: {
        color: '#fff',
        textAlign: 'center'
    }
}

class Maintenance extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>We'll be back soon!</h1>

                <p style={styles.p}>Sorry for the inconvenience</p>
            </React.Fragment>
        )
    }
}

export default Maintenance
