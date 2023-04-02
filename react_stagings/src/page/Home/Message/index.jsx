import React, {Component} from 'react';

class Message extends Component {
    render() {
        console.log('Message', this.props)
        return (
            <div>
                Message页面
            </div>
        );
    }
}

export default Message;