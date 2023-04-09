// 创建外壳组件App
import React,{ Component } from "react";

class App extends Component {
    state = {
        count: 0
    }

    addCount = () => {

        /*
        * setState(stateChange, [callback]) ------- 对象式的setState
        *  1， stateChange为状态改变对象
        *  2.  callback是可选的回调函数，它在状态更新完毕，界面也更新后（render调用后）才被调用
        *
        * */
        // this.setState({count: this.state.count + 1}, ()=>{
        //     console.log(this.state.count)
        // })





        /*
        * setState(updater, [callback]) ------- 函数式的setState
        *  1， updater为返回stateChange对象的函数
        *  2.  updater可以接收state和props
        *  2.  callback是可选的回调函数，它在状态更新完毕，界面也更新后（render调用后）才被调用
        *
        * */
        this.setState((state, props) => {
            return {count: state.count + 1}
        })

        /*
        * 总结
        *  对象式的setState是函数式的setState的简写方式
        *  使用原则：
        *        1， 如果新状态不依赖于原状态=====》使用对象方式
        *        2， 如果新状态依赖于原状态=====》 使用函数方式
        *        3， 如果需要在setState()执行后获取最新的状态数据，要在第二个callback函数中读取
        * */


    }

    render() {
        return (
            <div >
                count: {this.state.count}
                <button onClick={this.addCount}>+</button>
            </div>
        )
    }
}

export default App