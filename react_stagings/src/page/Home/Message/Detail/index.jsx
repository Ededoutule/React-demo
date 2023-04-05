import React, {Component} from 'react';
import qs from 'qs'


class Detail extends Component {
    render() {
        console.log(this.props)
        // 接收params参数
        const {id, title} = this.props.match.params


        // 接收search参数
        // 使用工具类，将?id=3&title=信息3转化为{id: 3, title: "信息3"}
        // const  search = this.props.location.search
        // const {id, title} = qs.parse(search.slice(1))

        // 接收state参数
        // const {id, title} = this.props.location.state || {}


        return (
            <div>
                <ul>
                    <li>
                        {id}: {title}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Detail;