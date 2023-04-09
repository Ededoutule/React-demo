import { PERSONADD } from '../constant'

const initialPersonState = [{
    name: '默认',
    age: 19,
    id: '001'
}]


const person = (preState = initialPersonState, action) => {
    const { type, data } = action
    switch (type) {
        case PERSONADD:
            // perState.unshift(data) // 此处不可以这样写，这样会导致preState被改下写，personReducer就不是纯函数了
            // 纯函数不能改变参数数据
            // preState.unshift()，preState.push()会改变preState数据，导致redux不能监听到
            return [ data, ...preState ];
        default:
            return preState;
    }
}


export default person;