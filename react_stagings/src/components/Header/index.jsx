import React, {Component} from 'react';
import {withRouter} from "react-router-dom";


// withRouter
// 作用： 可以将一般组件转化为路由组件，使其可以使用
// 将react-router 的 history、location、match 三个对象传入props对象上,这个组件可以使用history、location、match对象
class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Header页面
            </div>
        );
    }
}

export default withRouter(Header);