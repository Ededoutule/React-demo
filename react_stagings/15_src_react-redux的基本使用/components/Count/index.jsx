import React, {Component} from 'react';
import store from "../../redux/store";
import {COUNTDECREMENTED, COUNTINCREMENTED} from "../../redux/constant";

class Count extends Component {

    countHandle = (type) => {
        return () => {
            const data = this.selectRef.value
            // 通过dispatch改变store中state的值
            // store.dispatch({type: type === 'add' ? COUNTINCREMENTED : COUNTDECREMENTED , data})

            this.props.add({type, data})

        }
    }
    render() {
        console.log('Counts', this.props)
        return (
            <div>
                {/* 通过getState获取store中的值  */}
                <div>count: {this.props.count}</div>
                <select ref={e => this.selectRef = e}>
                    <option >1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <button onClick={this.countHandle('add')}>+</button>
                <button onClick={this.countHandle('delete')}>-</button>
            </div>
        );
    }
}

export default Count;