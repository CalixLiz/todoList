import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import STORE from './STORE'
import DisplayList from './displayList'
import ACTIONS from './actions'

var toDo = React.createClass({

	getInitialState() {
		return STORE.data
	},

	componentWillMount() {
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	render: function() {
		return (
			<div>
				<h1>To Do List</h1>
				<FormComponent />
				<DisplayList items={this.state.items} />
			</div>
		)
	}
})


var FormComponent = React.createClass({

	handleSubmit: function(e) {
		e.preventDefault()
		var newTask = e.target.task.value
		ACTIONS.addTask(newTask)
		e.target.reset()
	},

	render: function() {
		return (
		<form onSubmit={this.handleSubmit}>
			<input name='task' placeholder='Things To Do?' />
			<button>Submit</button>
		</form>
		)
	}
})

export default toDo