import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss'


class Header extends Component {
    render() {
        return (
            <div className="tool-header">
                <input type="text" placeholder="请输入任务，按回车键" className="input" />
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;