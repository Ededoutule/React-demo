import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss'

import ToodItem from "../ToodItem";
class Toods extends Component {
    render() {
        return (
            <div className="tools">
                <ToodItem />
            </div>
        );
    }
}

Toods.propTypes = {};

export default Toods;