import {combineReducers, createStore} from 'redux'
// 引入为count组件服务的reducer
// import count from './reducers/count'
// // 引入为person组件服务的reducer
// import person from "./reducers/person";
// 引入redux的开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'
// // 使用该方法合并两个或者多个reducer
// const rootReducer = combineReducers({
//     count,
//     person
// });

// 引入汇总之后的reducer
import rootReducer from './reducers'


// 创建store仓库
const store = createStore(rootReducer, composeWithDevTools())
export default store