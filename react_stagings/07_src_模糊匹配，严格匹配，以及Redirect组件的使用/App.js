// 创建外壳组件App
import React,{ Component } from "react";
import './App.scss'
import Header from './page/Header'
import Body from './page/Body'
import Test from './page/Test'
import Page404 from './page/Page404'
import {Redirect, Route, Switch} from "react-router-dom";
import MyNavLink from "./components/MyNavLink";
class App extends Component {
    render() {
        return (
            <div className="tool-warp" >

                <MyNavLink activeClassName="cc" to="/header">header</MyNavLink>
                <MyNavLink activeClassName="cc" to="/test">body</MyNavLink>
                {/*
                模糊匹配，严格匹配
                    名词约定：
                        path： Route组件中path属性的值
                        pathname: 指的如下格式
                            link组件中to的属性值
                            地址栏中的地址
                    模糊匹配规则
                          只要pathname以path开头就算匹配成功
                          匹配成功就加载对应组件；
                          整个匹配过程是逐一匹配，一个匹配成功了，并不会停止匹配。
                    模糊匹配和精确匹配
                          默认是模糊匹配的
                          补充exact可以设置成精确匹配
                */}
                <MyNavLink activeClassName="cc" to="/test/header/a">test</MyNavLink>


                <Switch>
                    <Route path='/header' component={Header}></Route>
                    <Route path='/test' component={Body}></Route>
                     {/*exact 设置精确匹配 */}
                    <Route path='/test/header/a'  component={Test}></Route>
                    <Route component={Page404}></Route>
                    {/*
                        设置默认显示组件
                        一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
                    */}
                    <Redirect to="/header"></Redirect>
                </Switch>
            </div>
        )
    }
}

export default App