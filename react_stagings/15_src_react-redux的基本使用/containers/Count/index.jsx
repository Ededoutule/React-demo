// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'


// 引入Count的UI组件
import CountUI from '../../components/Count'
import {COUNTDECREMENTED, COUNTINCREMENTED} from "../../redux/constant";

// mapStateToProps函数返回的对象中的Key就作为传递给UI组件props的key,value就作为传递给UI组件props的value---状态
// 类似于这样的 <CountUI  n={900} c={"start"} ></CountUI>
const mapStateToProps = (store) => {
    return { count: store }
}

// mapDispatchToProps函数返回的对象中的Key就作为传递给UI组件props的key,value就作为传递给UI组件props的value---操作状态的方法
// 类似于这样的 <CountUI  add={() => { console.log(1)} ></CountUI>
const mapDispatchToProps = (dispatch) => {
    return {
        add: val => dispatch({ type: val.type === 'add' ? COUNTINCREMENTED : COUNTDECREMENTED , data: val.data })
    }
}



// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)