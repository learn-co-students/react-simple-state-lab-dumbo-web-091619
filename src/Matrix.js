import React from 'react';
import Cell from './Cell.js'

export default class Matrix extends React.Component {


  create_grid = () => (
    this.props.values.map( colors =>
		<div className="row">
			{ this.create_row(colors) }
		</div>)
  )

  create_row = (colors) => (
    colors.map( color => <Cell value={color} /> )
  )

  render() {
    return (
      <div id="matrix">
        { this.create_grid() }
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: (() => {
    const default_row = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(default_row))
  })()
}
