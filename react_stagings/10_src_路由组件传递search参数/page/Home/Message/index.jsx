import React, {Component} from 'react';
import Detail from './Detail'
import {Link, Route} from "react-router-dom";

class Message extends Component {
    state = {
        messageArr: [
            {id: 1, title: '信息1'},
            {id: 2, title: '信息2'},
            {id: 3, title: '信息3'},
        ]
    }
    render() {
        // console.log('Message', this.props)
        return (
            <div>
                <div>
                    {
                        this.state.messageArr.map(msg => {
                            return (
                                <div key={msg.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/*<Link to={`/home/message/detail/${msg.id}/${msg.title}`} >{msg.title}</Link>*/}

                                    {/* 向路由组件传递search参数 */}
                                    <Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`} >{msg.title}</Link>

                                </div>
                            )
                        })
                    }
                </div>
                <hr/>
                <div>
                    {/* 声明接收params参数 */}
                    {/*<Route path="/home/message/detail/:id/:title" component={Detail}></Route>*/}

                    {/* search参数无需声明接收，正常注册路由即可 */}
                    <Route path="/home/message/detail" component={Detail}></Route>
                </div>
            </div>
        );
    }
}

export default Message;