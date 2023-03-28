import React, {Component} from 'react';
import './index.scss'
class Footers extends Component {

    countChange = (e) => {
        this.props.countChangeStat(e.target.checked)
    }
    handleClearAll = () => {
        console.log(
            'ddd'
        )
        this.props.stateClearAll()
    }

    render() {
        const { toolsList } = this.props
        const doneCount = toolsList.reduce((count, item)=> {
            return count + (item.state ? 1 : 0)
        }, 0)
        const total = toolsList.length
        return (
            <div className="footers">
                <div className="left">
                    <input type="checkbox" className="checkbox1" checked={doneCount === total && total !== 0 ? true : false} onChange={this.countChange} />
                    <span className="count">已完成{doneCount}/总数{total}</span>
                </div>
                <div className="right" onClick={this.handleClearAll}>
                    删除已完成任务
                </div>
            </div>
        );
    }
}

export default Footers;