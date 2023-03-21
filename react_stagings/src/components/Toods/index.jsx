import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ToodItem from "../ToodItem";
class Toods extends Component {
    render() {
        return (
            <div>
                <ToodItem />
            </div>
        );
    }
}

Toods.propTypes = {};

export default Toods;