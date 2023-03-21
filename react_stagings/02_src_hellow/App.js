// 创建外壳组件App
import React,{ Component } from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome"
class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}

export default App