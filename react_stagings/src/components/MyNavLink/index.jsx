import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <NavLink {...this.props}></NavLink>
            </div>
        );
    }
}

export default MyNavLink;