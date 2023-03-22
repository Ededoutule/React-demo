import React, {Component} from 'react';
import './index.scss'
class Footers extends Component {
    render() {
        return (
            <div className="footers">
                <div className="left">
                    <input type="checkbox" className="checkbox1" />
                    <span className="count">已完成{20}/总数{30}</span>
                </div>
                <div className="right">
                    {/*<button>删除已完成任务</button>*/}
                    删除已完成任务
                </div>
            </div>
        );
    }
}

export default Footers;