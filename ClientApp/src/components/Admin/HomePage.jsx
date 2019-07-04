import React, { Component } from 'react'
import { connect } from 'react-redux';

export class _HomePage extends Component {
    render() {
        return <div className="row">
            <SideBar />
            <SideBar />
        </div>
    }
}

export const SideBar = () => {
    return <div data-side-bar>SideBar</div>
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        profile: 'state.user.profile',
        loggedIn: 'state.auth.loggedIn'
    };
}
export default connect(mapStateToProps)(_HomePage);
