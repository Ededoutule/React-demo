import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss'
class ToodItem extends Component {
    render() {
        return (
            <div className="tool-item">
                <input type="checkbox" />
                <span>洗衣服</span>
                <div>
                    <button>删除</button>
                </div>
            </div>
        );
    }
}

ToodItem.propTypes = {};

export default ToodItem;