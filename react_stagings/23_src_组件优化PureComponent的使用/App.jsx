import React, {Component, PureComponent} from 'react';


// 使用PureComponent优化render渲染
// PureComponent的原理是继承了Component类，自动加载shouldComponentUpdate函数，当组件更新时，
// shouldComponentUpdate对props和state进行了一层浅比较，如果组件的props和state都没有发生改变，
// render方法就不会触发，省去Virtual DOM的生成和对比过程，达到提升性能的目的。

// 想要用PureComponent的特性，应该遵守原则：
// 确保数据类型是值类型
// 如果是引用类型，不应当有深层次的数据变化(解构).

// 主要使用的是生命周期函数shouldComponentUpdate的使用，对比新老数据，返回true或者false，控制render()函数的刷新

class App extends PureComponent {
    state = {carName: '奔驰'}

    changeCar = () => {
        // this.setState({})
        this.setState({carName: '保时捷'})
    }

    render() {
        console.log("parent---render")
        return (
            <div>
                {this.state.carName}
                <button onClick={this.changeCar}>点我换车</button>
                <A carName={this.state.carName}></A>
            </div>
        );
    }
}


class A extends Component {
    render() {
        console.log("children---render")
        return (
            <div>
                {this.props.carName}
                A..
            </div>
        );
    }
}


export default App;