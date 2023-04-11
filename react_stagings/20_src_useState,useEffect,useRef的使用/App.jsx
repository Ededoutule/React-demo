import React, {useEffect, useRef, useState} from 'react';
import root from "./index";

// class App extends Component {
//     state = {
//         count: 0
//     }
//
//     componentDidMount() {
//         this.countInt =  setInterval(()=> {
//             this.setState({count: this.state.count + 1})
//         }, 500)
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.countInt)
//     }
//
//     addCount = ()=> {
//         this.setState({count: this.state.count + 1})
//     }
//
//     deleteNode = ()=> {
//         root.unmount()
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.count}
//                 <button onClick={this.addCount}>+</button>
//                 <button onClick={this.deleteNode}>卸载</button>
//             </div>
//         );
//     }
// }


function App() {

    // useState
    const [count, setCount] = useState(0)
    const countHandle = () => {
        // addCount({...count, count: count.count + 1 })
        // setCount(() =>count + 1)
    }


    // ref的使用
    const inputRef = useRef()
    
    useEffect(() => {
        const countInt = setInterval(() => {
            setCount(count => count + 1)
        }, 500)
        return () => {
            clearInterval(countInt)
        }
    }, [])


    function changeName() {
        // addCount(() => ({...count, name: `${count.count}1` }))
    }

    function deleteNode() {
        root.unmount()
    }

    function showValue() {
        alert(inputRef.current.value)
    }

    return (
        <div>
            {/*{count?.count}*/}
            {/*<br/>*/}
            {/*{count?.name}*/}
            {count}
            <input type="text" ref={inputRef}/>
            <br/>
            <button onClick={countHandle}>+</button>
            <button onClick={changeName}>gao</button>
            <button onClick={deleteNode}>卸载</button>
            <button onClick={showValue}>提交</button>
        </div>
    )
}


export default App;