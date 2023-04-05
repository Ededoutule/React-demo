import React, {Component} from 'react';

class Detail extends Component {
    render() {
        console.log(this)
        // 接收params参数
        const {id, title} = this.props.match.params
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