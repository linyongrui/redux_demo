import React, { Component } from 'react'
import myStore from '../../redux/store'

export default class Count extends Component {
    componentDidMount() {
        myStore.subscribe(() => { this.setState({}) })
    }

    handleAdd = () => {
        const selectNub = this.selectNub.value * 1
        myStore.dispatch({
            type: 'add',
            num: selectNub
        })
    }

    handleSub = () => {
        const selectNub = this.selectNub.value * 1
        myStore.dispatch({
            type: 'sub',
            num: selectNub
        })
    }

    handleAddIfOdd = () => {
        const selectNub = this.selectNub.value * 1
        if (myStore.getState() % 2 !== 0) {
            myStore.dispatch({
                type: 'add',
                num: selectNub
            })
        }
    }

    handleAutoAdd = () => {
        const selectNub = this.selectNub.value * 1
        setTimeout(() => {
            myStore.dispatch({
                type: 'add',
                num: selectNub
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                <h2>当前和：{myStore.getState()}</h2>
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
