// 创建外壳组件App
import React,{ Component } from "react";
import './App.scss'
import 'antd/dist/reset.css'
import { Button } from 'antd';
import store from './redux/store'
import {
    COUNTINCREMENTED,
    COUNTDECREMENTED
} from './redux/constant'


class App extends Component {

    componentDidMount() {

        // redux订阅store仓库中数据的变化，进行重新render,刷新页面
        store.subscribe(() => {
            this.setState({})
        })
    }

    countHandle = (type) => {
        return () => {
            const data = this.selectRef.value
            // 通过dispatch改变store中state的值
            store.dispatch({type: type === 'add' ? COUNTINCREMENTED : COUNTDECREMENTED , data})
        }
    }


    render() {
        return (
            <div className="tool-warp" >
                {/* 通过getState获取store中的值  */}
                <div>count: {store.getState()}</div>
                <select ref={e => this.selectRef = e}>
                    <option >1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                {/*<Button type="primary">{store.getState()}</Button>*/}
                <button onClick={this.countHandle('add')}>+</button>
                <button onClick={this.countHandle('delete')}>-</button>
            </div>
        )
    }
}

export default App