import React from 'react'

class HomeClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
        }
    }

    render() {
        const { counter } = this.state
        return(
            <div style={{padding: '20px'}}>
            <h2>Counter: {counter}</h2>
            <button onClick={() => this.setState ({ counter: counter + 1})}>+</button>
            &nbsp;
            <button onClick={() => this.setState ({ counter: counter - 1})}>-</button>
            </div>
            )
        }
    }

    export default HomeClass