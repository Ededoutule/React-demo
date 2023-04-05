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

    showHandle = (type, id, title) => {
        return () => {
            // 携带params参数
            this.props.history[type](`/home/message/detail/${id}/${title}`)

            // 携带search参数
            // this.props.history[type](`/home/message/detail/?id=${id}&title=${title}`)

            // 携带state参数
            // this.props.history[type](`/home/message/detail`, {id, title})
        }
    }

    backOrForward = (type) => {
        return () => {
            this.props.history[type](0)
        }
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
                                    <Link to={`/home/message/detail/${msg.id}/${msg.title}`} >{msg.title}</Link>

                                    {/* 向路由组件传递search参数 */}
                                    {/*<Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`} >{msg.title}</Link>*/}


                                    {/* 向路由组件传递state参数 */}
                                    {/*<Link to={{pathname: `/home/message/detail`, state: {id: msg.id, title: msg.title}}} >{msg.title}</Link>*/}
                                    &nbsp;<button onClick={this.showHandle("push", msg.id, msg.title)}>push查看</button>
                                    &nbsp;<button onClick={this.showHandle("replace", msg.id, msg.title)}>replace查看</button>
                                </div>
                            )
                        })
                    }
                </div>
                <hr/>
                <div>
                    {/* 声明接收params参数 */}
                    <Route path="/home/message/detail/:id/:title" component={Detail}></Route>

                    {/* search参数无需声明接收，正常注册路由即可  */}
                    {/*<Route path="/home/message/detail" component={Detail}></Route>*/}


                    {/* state参数无需声明接收，正常注册路由即可, 如果复制链接打开一个新的标签页，state会丢失  */}
                    {/*<Route path="/home/message/detail" component={Detail}></Route>*/}
                </div>

                <button onClick={this.backOrForward('goBack')}>回退</button>
                <button onClick={this.backOrForward('goForward')}>前进</button>
                <button onClick={this.backOrForward('go')}>go</button>
            </div>
        );
    }

}

export default Message;