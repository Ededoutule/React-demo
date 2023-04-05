// 创建外壳组件App
import React,{ Component } from "react";
import './App.scss'
import About from './page/About'
import Home from './page/Home'

import {Redirect, Route, Switch} from "react-router-dom";
import MyNavLink from "./components/MyNavLink";
import Header from "./components/Header";
class App extends Component {
    render() {
        return (
            <div className="tool-warp" >

                <div className="nav">
                    <Header></Header>
                    <MyNavLink activeClassName="cc" to="/about">about</MyNavLink>
                    <MyNavLink activeClassName="cc" to="/home">home</MyNavLink>
                </div>

                <div className="content">
                    <Switch>
                        <Route path='/about' component={About}></Route>
                        <Route path='/home' component={Home}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App