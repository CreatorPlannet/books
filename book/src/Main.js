import React, { Component } from 'react'

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'Hello',
            num: 1,
            inin: '',
            arr:[
                'qwert',
                18
            ]
        }
        this.inChange = this.inChange.bind(this)
    }

    change = () => {
        if (this.state.text == 'Hello') {
            this.setState({
                text: this.state.text = 'QWERTY'
            })
        } else {
            this.setState({
                text: this.state.text = 'Hello'
            })
        }
    }
    numChange = () => {
        this.setState({
            num:  11111
        })
    }
    //когда метод не стрелочная его необходимо байндить (bind) 
    inChange (e, color){
        console.log(color)
        this.setState({
            inin: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.change}>Hello</button>

                <h1>{this.state.num}</h1>
                <button onClick={this.numChange}>10</button>

                <h2>{this.state.inin}</h2>
                <input type='text' onChange={(e) => this.inChange(e, 'red')} />

                <div>
                    <h1>{this.state.arr[1]}</h1>
                </div>
            </div>
        )
    }
}

export default Main