import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './index.sass'
class Body extends Component {
    // A组件内的状态
    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }
    // 订阅了消息名为updateState的消息事件
    componentDidMount(){
        this.token = PubSub.subscribe('updateState',(_,data)=>{
            this.setState(data) // 将收到的状态data更新
        })
    }
// 页面销毁前删除消息订阅 以防消息泄露
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="users">
                {
                    isFirst ? <h2>first</h2> :
                        isLoading ? <h2>Loading</h2>:
                            err ? <h2>{err}</h2> :
                                users.map(userObj => {
                                    return (
                                        <div key={userObj.id}>
                                            <a href={userObj.html_url}>
                                                <img src={userObj.avatar_url} style={{width: '100px'}} />
                                            </a>

                                            <div>{userObj.login}</div>
                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
}

export default Body;