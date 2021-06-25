import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        count: 0
    }

    handleAdd = () => {
        const { count } = this.state
        const selectNub = this.selectNub.value * 1
        this.setState({ count: count + selectNub })
    }

    handleSub = () => {
        const { count } = this.state
        const selectNub = this.selectNub.value * 1
        this.setState({ count: count - selectNub })
    }

    handleAddIfOdd = () => {
        const { count } = this.state
        const selectNub = this.selectNub.value * 1
        if (count % 2 !== 0) {
            this.setState({ count: count + selectNub })
        }
    }

    handleAutoAdd = () => {
        const { count } = this.state
        const selectNub = this.selectNub.value * 1
        setTimeout(() => {
            this.setState({ count: count + selectNub })
        }, 1000);
    }
    render() {
        return (
            <div>
                <h2>当前和：{this.state.count}</h2>
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
