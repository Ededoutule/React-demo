// 创建外壳组件App
import React,{ Component } from "react";
import './App.scss'
import Header from './components/Header'
import Tools from './components/Toods'
import Footers from './components/Footers'

import nanoid from 'nanoid'

class App extends Component {
    state = {
        toolsList: [
            { name: '洗澡1', id: 1, state: false },
            { name: '洗澡2', id: 2, state: true },
            { name: '洗澡4', id: 3, state: true },
        ]

    }

    addState = (item) => {
        let newArr = { name: item, id: nanoid(), state: false}
        this.setState({toolsList: [newArr, ...this.state.toolsList]})
    }

    updateState = (state, id) => {
        let newArr = this.state.toolsList.map((e, value) => {
            if (id === e.id) return {...e, state}
            else return {...e}
        })
        this.setState({toolsList: newArr})
    }

    deleteState = (id) => {
        let newList = this.state.toolsList.filter(e=> {
            return id !== e.id
        })
        this.setState({toolsList: newList})
    }

    countChangeStat = (state) => {
        let newArr = this.state.toolsList.map(e => {
            return {...e, state}
        })
        this.setState({toolsList: newArr})
    }

    stateClearAll = () => {
        let newList = this.state.toolsList.filter(e => {
            return !e.state
        })
        console.log(newList)
        this.setState({toolsList: newList})
    }

    render() {
        return (
            <div className="tool-warp" >
                <Header addState={this.addState} />
                <Tools toolsList={this.state.toolsList} updateState={this.updateState} deleteState={this.deleteState} />
                <Footers toolsList={this.state.toolsList} countChangeStat={this.countChangeStat} stateClearAll={this.stateClearAll}/>
            </div>
        )
    }
}

export default App