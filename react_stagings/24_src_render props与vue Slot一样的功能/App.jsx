import React, {Component, PureComponent} from 'react';


class App extends PureComponent {
    state = {carName: '奔驰'}

    changeCar = () => {
        // this.setState({})
        this.setState({carName: '保时捷'})
    }

    render() {
        const {carName} = this.state
        return (
            <div>
                {this.state.carName}
                <button onClick={this.changeCar}>点我换车</button>
                {/* <A render={data => <B data={data}></B>}></A>
                    使用这个可以在App组件中让A组件传值给B组件
                    实现向组件内部动态传入带内容的结构（标签）
                */}

                {/*
                <A>
                    <B/>
                </A>
                这个形式的内容，A组件可以通过this.props.children获取A组件标签内的内容
                但是，B组件需要A组件内的数据是做不到


                */}
            </div>
        );
    }
}


class A extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                A组件
                {/*
                    A组件收到的render是一个函数，可以把A组件的数据传给B组件，B组件通过this.props拿到对于的数据，
                    这是一个回调函数传值
                */}
                {this.props.render('22')}
            </div>
        );
    }
}

function B(props) {
    console.log(props)
    return (
        <div>
            B组件
            {props.carName}
        </div>
    );
}


export default App;