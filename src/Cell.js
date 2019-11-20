import React from 'react'

class Cell extends React.Component {

  state = {
    color: this.props.value
  }

  colorClick = () => {
    this.setState({color: '#333'})
  }

    render(){
      return (
        <div className={'cell'} onClick={this.colorClick} style={{backgroundColor: this.state.color}}></div>
      )
    }
}


export default Cell

