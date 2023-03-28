import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss'
class ToodItem extends Component {
    state = {
        moveState: false
    }

    changeStat = (e, id) => {
        this.props.updateState(e.target.checked, id)
    }
    handleMouse = (flag) => {
        return () => {
            this.setState({ moveState: flag })
        }
    }
    deleteTools = (id) => {
        return () => {
            this.props.deleteState(id)
        }
    }
    render() {
        const {element} = this.props
        const { moveState } = this.state
        return (
            <div className="tool-item"
                 style={{backgroundColor: moveState ? "beige": "white"}}
                 onMouseEnter={this.handleMouse(true)}
                 onMouseLeave={this.handleMouse(false)}
            >
                <input type="checkbox" className="checkbox" checked={element.state} onChange={(e)=>this.changeStat(e, element.id)} />
                <span className="text">{element.name}</span>
                <div className="delete_button" style={{"opacity": moveState ? "1" : "0"}} onClick={this.deleteTools(element.id)}>删除</div>
            </div>
        );
    }
}

ToodItem.propTypes = {};

export default ToodItem;