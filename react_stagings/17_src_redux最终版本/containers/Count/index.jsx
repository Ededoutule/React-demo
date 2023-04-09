// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import React, {Component} from 'react';

// 引入Count的UI组件
import {COUNTDECREMENTED, COUNTINCREMENTED} from "../../redux/constant";



class Count extends Component {
    countHandle = (type) => {
        return () => {
            const data = this.selectRef.value
            // 通过dispatch改变store中state的值
            // store.dispatch({type: type === 'add' ? COUNTINCREMENTED : COUNTDECREMENTED , data})
            this.props.add({ type, data })
        }
    }
    render() {
        return (
            <div>
                {/* 通过getState获取store中的值  */}
                <div>count: {this.props.count}---{this.props.personCount}</div>
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


// mapStateToProps函数返回的对象中的Key就作为传递给UI组件props的key,value就作为传递给UI组件props的value---状态
// 类似于这样的 <CountUI  n={900} c={"start"} ></CountUI>
const mapStateToProps = (store) => {
    return {
        count: store.count,
        personCount: store.person.length
    }
}

// mapDispatchToProps函数返回的对象中的Key就作为传递给UI组件props的key,value就作为传递给UI组件props的value---操作状态的方法
// 类似于这样的 <CountUI  add={() => { console.log(1)} ></CountUI>
const mapDispatchToProps = (dispatch) => {
    return {
        add: val => dispatch({ type: val.type === 'add' ? COUNTINCREMENTED : COUNTDECREMENTED , data: val.data })
    }
}



// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,  mapDispatchToProps)(Count)