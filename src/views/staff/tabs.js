import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'

const Tabs = props => {
    return (
        <Nav className="nav-tab nav-tab-edit" style={{ paddingTop: '0px' }}>
            <NavItem>
                <NavLink
                    className={classnames({ active: props.activeTab === 'profile' })}
                    onClick={() => {
                        props.handleActiveTab('profile')
                    }}>
                    Profile
                </NavLink>
            </NavItem>

            {props.applicationVisible === true && (
                <NavItem>
                    <NavLink
                        className={classnames({ active: props.activeTab === 'application' })}
                        onClick={() => {
                            props.handleActiveTab('application')
                        }}>
                        Application
                    </NavLink>
                </NavItem>
            )}
        </Nav>
    )
}

export default Tabs
