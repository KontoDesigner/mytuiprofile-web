import React, { Component } from 'react'
import Routes from './infrastructure/routes'
import Loader from './components/loader'
import { BrowserRouter } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'
import * as geographyActions from './actions/geographyActions'
import * as userActions from './actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container } from 'reactstrap'
import './styles/site.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            loaded: false
        }
    }

    async componentWillMount() {
        const _this = this

        return Promise.all([
            this.props.userActions.getUser(),
            this.props.geographyActions.getDestinations(),
            this.props.geographyActions.getJobTitles(),
            this.props.geographyActions.getSourceMarkets(),
            this.props.geographyActions.getF2wUrl(),
            this.props.geographyActions.getSettings(),
            this.props.geographyActions.getKeywords()
        ]).then(function() {
            _this.setState({ loaded: true })
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Loader />

                    <ReduxToastr
                        timeOut={3000}
                        newestOnTop={false}
                        preventDuplicates={false}
                        position="bottom-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                    />

                    {this.state.loaded === true && (
                        <Container>
                            <h1>My TUI Profile</h1>

                            <Routes user={this.props.user} />
                        </Container>
                    )}
                </div>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        destinations: state.geography.destinations
    }
}

function mapDispatchToProps(dispatch) {
    return {
        geographyActions: bindActionCreators(geographyActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
