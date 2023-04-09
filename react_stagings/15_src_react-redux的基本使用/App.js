// 创建外壳组件App
import React,{ Component } from "react";
import './App.scss'
import store from './redux/store'
import Count from "./containers/Count";



class App extends Component {

    render() {
        return (
            <div className="tool-warp" >
                <Count store={store}></Count>
            </div>
        )
    }
}

export default App