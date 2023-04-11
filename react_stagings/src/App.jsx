import React, {Component, useEffect, useId, useState} from 'react';
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
    const [count, setCount] = useState(0)
    // const [count, addCount] = useState({count: 0, name: 'Tom'})
    const countHandle = ()=> {
        // addCount({...count, count: count.count + 1 })
        // setCount(() =>count + 1)
    }
    const id = useId()
    console.log(id)
    useEffect(() => {
        console.log('@')
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
    
    return (
        <div>
            {/*{count?.count}*/}
            {/*<br/>*/}
            {/*{count?.name}*/}
            {count}
            <button onClick={countHandle}>+</button>
            <button onClick={changeName}>gao</button>
            <button onClick={deleteNode}>卸载</button>
        </div>
    )
}





export default App;