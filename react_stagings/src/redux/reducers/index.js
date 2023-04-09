// 引入为count组件服务的reducer
import count from './count'
// 引入为person组件服务的reducer
import person from "./person"
import {combineReducers} from "redux";



// 使用该方法合并两个或者多个reducer
export default combineReducers({
    count,
    person
});

