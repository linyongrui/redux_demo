import { Component } from 'react'
import { connect } from 'react-redux'
import { createAddAction, createSubAction, createAutoAddAction } from '../../redux/actions/count'

class Count extends Component {

    handleAdd = () => {
        const selectNub = this.selectNub.value * 1
        this.props.add(selectNub)
    }

    handleSub = () => {
        const selectNub = this.selectNub.value * 1
        this.props.sub(selectNub)
    }

    handleAddIfOdd = () => {
        const selectNub = this.selectNub.value * 1
        if (this.props.count % 2 !== 0) {
            this.props.add(selectNub)
        }
    }

    handleAutoAdd = () => {
        const selectNub = this.selectNub.value * 1
        this.props.autoAdd(selectNub, 1000)
    }

    render() {
        return (
            <div>
                <h2>我是Count组件，Person组件的总人数为{this.props.personSize}</h2>
                <h4>当前和：{this.props.count}</h4>
                <select ref={s => this.selectNub = s}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>&nbsp;
                <button onClick={this.handleAdd}>+</button>&nbsp;
                <button onClick={this.handleSub}>-</button>&nbsp;
                <button onClick={this.handleAddIfOdd}>奇数+</button>&nbsp;
                <button onClick={this.handleAutoAdd}>异步+</button>&nbsp;
            </div>
        )
    }
}

export default connect(
    state => ({ count: state.sum, personSize: state.persons.length }),
    {
        add: createAddAction,
        sub: createSubAction,
        autoAdd: createAutoAddAction
    }

)(Count)