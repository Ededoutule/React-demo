// 创建外壳组件App
import React,{ Component } from "react";
import './App.scss'
import Header from './page/Header'
import Body from './page/Body'
import {Link, NavLink, Route} from "react-router-dom";
import MyNavLink from "./components/MyNavLink";
class App extends Component {
    render() {
        return (
            <div className="tool-warp" >

                {/*
                父组件中使用子组件时，在子组件中
                例如子组件为MyNavLink，使用子组件时标签中添加内容后，子组件可以通过this.props.children获取内容

                <MyNavLink activeClassName="cc" to="/header">header</MyNavLink>
                
                MyNavLink组件中，this.props.children为header


                <NavLink activeClassName="cc" to="/header">header</NavLink>
                <NavLink activeClassName="cc" to="/body">body</NavLink>*/}
                <MyNavLink activeClassName="cc" to="/header">header</MyNavLink>
                <MyNavLink activeClassName="cc" to="/body">body</MyNavLink>
                <Route path='/header' component={Header}></Route>
                <Route path='/body' component={Body}></Route>
            </div>
        )
    }
}

export default App