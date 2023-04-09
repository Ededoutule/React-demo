import {
    COUNTINCREMENTED,
    COUNTDECREMENTED
} from '../constant'



// 创建redux中的reducer工具函数，
// preState 上一个state值
// 传入的值
const count = (preState = 0, action) => {
    switch (action.type) {
        case COUNTINCREMENTED:
            return preState + action.data*1
        case COUNTDECREMENTED:
            return preState - action.data*1
        default:
            return preState
    }
}

export default count;