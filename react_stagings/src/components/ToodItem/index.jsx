import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss'
class ToodItem extends Component {
    render() {
        return (
            <div className="tool-item" style={}>
                <input type="checkbox" className="checkbox" />
                <span className="text">洗衣服</span>
                <div className="delete" style={{"display": "none"}}>
                    <button className="delete_button">删除</button>
                </div>
            </div>
        );
    }
}

ToodItem.propTypes = {};

export default ToodItem;