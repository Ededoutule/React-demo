import { createStore } from 'redux'
import count_reducer from './count_reducer'

// 使用该方法合并两个reducer
// const rootReducer = combineReducers({
//     BookReducer,
//     UserReducer
// });

// 创建store仓库
let store = createStore(count_reducer)


export default store