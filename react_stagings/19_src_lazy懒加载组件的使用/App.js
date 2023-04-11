// 创建外壳组件App
import React,{ Component, lazy, Suspense } from "react";
import {NavLink, Route} from "react-router-dom";
// import About from "./page/About";
// import Home from "./page/Home";

// 通过lazy实现路由懒加载
const Home = lazy(() => import("./page/Home"))
const About = lazy(() => import("./page/About"))
class App extends Component {

    render() {
        return (
            <div >
                <NavLink to="/home">home</NavLink>
                <NavLink to="/about">about</NavLink>
                {/*
                    suspense的字面意思就是悬而不决，用在平时开发中，
                    就可以理解为还没有完成的事，你不知道啥时候完成。也就是异步，异步加载组件，异步请求数据。

                    这样在打包代码时，可以显著减少主包的体积，加快加载速度，从而提升用户体验；而当路由切换时，
                    加载新的组件代码，代码加载是异步的过程，此时suspense就会进如fallback，那我们看到的就是loading，
                    显式的告诉用户正在加载，当代码加载完成就会展示A组件的内容，整个loading状态不用开发者去控制。

                */}
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                </Suspense>

            </div>
        )
    }
}

export default App