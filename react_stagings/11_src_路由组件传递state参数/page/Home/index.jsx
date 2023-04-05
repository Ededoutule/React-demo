import React, {Component} from 'react';
import MyNavLink from "../../components/MyNavLink";
import "./index.scss"
import {Redirect, Route, Switch} from "react-router-dom";
import Message from "./Message"
import News from "./News"

class Home extends Component {
    render() {
        return (
            <div className="home">
                <br/>
                <br/>
                <br/>
                {/*
                嵌套路由
                    1 注册子路由时要写上父路由的path值
                    2 路由的匹配是按照注册路由的顺序进行的

                */}
                <MyNavLink to="/home/message">Message</MyNavLink>
                <MyNavLink to="/home/news">News</MyNavLink>
                <Switch>
                    <Route path="/home/message" component={Message}></Route>
                    <Route path="/home/news" component={News}></Route>
                    <Redirect to="/home/message"></Redirect>
                </Switch>


            </div>
        );
    }
}

export default Home;