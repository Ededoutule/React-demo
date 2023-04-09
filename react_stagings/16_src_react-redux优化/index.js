/*
* React 18以下版本
* */
// import React from 'react';
// import ReactDOM from "react-dom/client";
// import App from './App'
//
// ReactDOM.render(<App/>, document.getElementById('root'))

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"
import store from "./redux/store";
import { Provider } from 'react-redux'


// 为提供的创建一个 React 根container并返回根。
const root = createRoot(document.getElementById("root"));
// 根可用于将 React 元素渲染到 DOM 中


// 如果使用了react-redux,就不需要以下代码

// redux订阅store仓库中数据的变化，进行重新render,刷新页面
// store.subscribe(() => {
//     root.render(<App />)
// })



root.render(<Provider store={store}><App/></Provider>)
