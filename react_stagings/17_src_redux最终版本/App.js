// 创建外壳组件App
import React,{ Component } from "react";
import './App.scss'
import store from './redux/store'
import Count from "./containers/Count";
import Person from './containers/Person'


class App extends Component {

    render() {
        return (
            <div >
                <Count ></Count>
                <hr></hr>
                <Person />
            </div>
        )
    }
}

export default App