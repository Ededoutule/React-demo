import {COUNTDECREMENTED, COUNTINCREMENTED} from "../constant";
import store from '../store'

const incrementedAction = (data) => {
    store.dispatch({ type: COUNTDECREMENTED , data})
}
const decrementedAction = (data) => {
    store.dispatch({ type: COUNTINCREMENTED , data })
}


export {
    incrementedAction,
    decrementedAction
}