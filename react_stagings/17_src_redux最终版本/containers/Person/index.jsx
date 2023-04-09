import React, {Component} from 'react';
import { connect } from 'react-redux'
import nanoid from "nanoid";
import { createAddPersonAction } from '../../redux/action/person'

class Person extends Component {
    style = {
        color: 'red',
        fontSize: '20px'
    }
    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id: nanoid() , name, age}
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        console.log("personArr", this.props)
        const { personArr, count } = this.props

        return (
            <div>
                <h2>我是Person组件{}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="请输入名字" />
                <input ref={c => this.ageNode = c} type="text" placeholder="请输入年龄" />
                <button onClick={this.addPerson}>添加{count}</button>
                <ul>
                {
                    personArr.map(val => {
                        return (
                            <li style={this.style} key={val.id}>{val.name}----{val.age}</li>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
}








export default connect(
    store => ({
        personArr: store.person,
        count: store.count
    }),
    {
        addPerson: createAddPersonAction
    }
)(Person)