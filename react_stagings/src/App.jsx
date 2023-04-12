
import React, {Component, useContext, useState} from 'react';

import PropTypes from 'prop-types';


// 创建Context
const MyContext = React.createContext('light')


// class App extends Component {
//     state = { userName: 'tom' }
//     render() {
//         return (
//             <MyContext.Provider value={this.state.userName}>
//                 <B />
//             </MyContext.Provider>
//         );
//     }
// }
//
// class A extends Component {
//     render() {
//         return (
//             <div>
//                 <B />
//             </div>
//         );
//     }
// }
// class B extends Component {
//     // 类式组件钟声明接收context
//     static contextType = MyContext
//     render() {
//         return (
//             <div>
//                 B
//
//                 {this.context}
//
//                 {/*
//                 // 也可以使用以下方法，函数组件于类组件通用
//                 <MyContext.Consumer>
//                     { myContext =>{
//                        return <h2>{myContext}</h2>
//                     }}
//                 </MyContext.Consumer>*/}
//             </div>
//         );
//     }
// }


function App() {
    const [name, setName] = useState('tom')
    return (
        <div>
            APP
            <MyContext.Provider value={name}>
                <A name={name}></A>
                {name}
            </MyContext.Provider >
        </div>
    )
}

function A(props, context) {
    const myContext = useContext(MyContext)
    console.log(myContext, props, context)
    return (
        <div>
            A
            <B></B>

        </div>
    )
}

function B(props, context) {
    // 函数组件中使用useContext接收context
    const myContext = useContext(MyContext)
    console.log(myContext)
    return (
        <div>
            B

            {/*
            // 也可以使用以下方法，函数组件于类组件通用
            <MyContext.Consumer>
                { myContext =>{
                    return <h2>{myContext}</h2>
                }}
            </MyContext.Consumer>*/}
        </div>
    )
}


export default App;