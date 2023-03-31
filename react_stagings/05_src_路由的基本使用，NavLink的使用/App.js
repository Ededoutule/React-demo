// 创建外壳组件App
import React,{ Component } from "react";
import './App.scss'
import Header from './components/Header'
import Body from './components/Body'
import {Link, NavLink, Route} from "react-router-dom";

// 使用路由时，需要在最高层<BrowserRouter>包裹整个组件，在一个路由实例中。


class App extends Component {
    render() {
        return (
            <div className="tool-warp" >
                {/*
                    在React中靠路由链接实现切换组件---编写路由链接
                    NavLink组件与Link都类似与a标签，但是前者有一个默认class为active， 也可以通过activeClassName指定
                    点击to="/header"组件这个active就到这个to="/header"组件的标签上
                    <Link to="/header">haeder</Link>
                    <Link to="/body">body</Link>
                */}
                <NavLink activeClassName="cc" to="/header">header</NavLink>
                <NavLink activeClassName="cc" to="/body">body</NavLink>
                {/* 注册路由，路由页面的展示区域 */}
                <Route path='/header' component={Header}></Route>
                <Route path='/body' component={Body}></Route>
            </div>
        )
    }
}

export default App