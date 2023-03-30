import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss'


class Header extends Component {

    addTools = (e) => {
        if (e.keyCode === 13 && e.target.value != '') {
            this.props.addState(e.target.value)
            e.target.value = ''
        }
    }

    render() {
        return (
            <div className="tool-header">
                <input type="text" placeholder="请输入任务，按回车键" className="input" onKeyDown={this.addTools} />
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;