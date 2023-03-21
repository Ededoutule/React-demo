// 创建外壳组件App
import React,{ Component } from "react";
import './App.scss'
import Header from './components/Header'
import Tools from './components/Toods'
import Footers from './components/Footers'

class App extends Component {
    render() {
        return (
            <div className="tool-warp">
                <Header />
                <Tools />
                <Footers />
            </div>
        )
    }
}

export default App