import React, {Component} from 'react';

export default class Cell extends Component {

    constructor(props){
        // console.log(prop.value)
        super()
        this.state = {color: props.value}
    }

    clicking = (event) => {
        console.log(event)
        this.setState({color: '#333'})
    }
    render(){

        return (
            <div 
            className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.clicking}>
            </div>
        )
    }

}