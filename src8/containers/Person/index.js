import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPerson } from '../../redux/actions/person'

class Person extends Component {

    add = () => {
        const personObj = { id: nanoid(), name: this.nameNode.value, age: this.ageNode.value }
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>我是Person组件,Count组件的和为：{this.props.sum}</h2>
                <input ref={nameNode => this.nameNode = nameNode} type="text" placeholder="姓名"></input> &nbsp;
                <input ref={ageNode => this.ageNode = ageNode} type="text" placeholder="年龄"></input> &nbsp;
                <button onClick={this.add}>添加</button> &nbsp;
                <ul>
                    {
                        this.props.persons.map((person) => {
                            return <li key={person.id}>姓名：{person.name}，年龄：{person.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ persons: state.persons, sum: state.sum }),
    {
        addPerson
    }
)(Person)
