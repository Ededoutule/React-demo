// 创建外壳组件App
import React,{ Component } from "react";
import './App.scss'
import Header from './components/Header'
import Body from './components/Body'



class App extends Component {




    render() {
        return (
            <div className="tool-warp" >
                <Header  />
                <Body />
            </div>
        )
    }
}

export default App