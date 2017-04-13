import React from 'react'
import ACTIONS from './actions'

var DisplayList = React.createClass({

	render: function() {
		return (
			<ul>
				{this.props.items.map((item) => <ItemComponent items={item} /> )}
			</ul>
		)
	}
})

var ItemComponent = React.createClass({
	render: function() {
		return (
			<li key={this.props.items.uniqueID}>
				<p> {this.props.items.name} </p>
		   		<a href='#' onClick={()=>ACTIONS.deleteItem(this.props.items.uniqueID)}>X</a>
		   </li>
		)
	}
})

export default DisplayList