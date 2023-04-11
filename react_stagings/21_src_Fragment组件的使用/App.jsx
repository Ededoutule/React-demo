import React, {useEffect, useRef, useState} from 'react';
import root from "./index";


function App() {

    // useState
    const [count, setCount] = useState(0)


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


    function deleteNode() {
        root.unmount()
    }

    function showValue() {
        alert(inputRef.current.value)
    }

    return (
        /*
        * <Fragment></Fragment>
        * 作用： 可以不用必须有一个真实的DOM根标签
        * 与<></>的区别就是，Fragment可以加class名，而<></>什么都不能加
        * */
        <React.Fragment className="A">
            {count}
            <input type="text" ref={inputRef}/>
            <br/>
            <button onClick={deleteNode}>卸载</button>
            <button onClick={showValue}>提交</button>
        </React.Fragment>
    )
}


export default App;