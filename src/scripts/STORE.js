import Backbone from 'backbone'

var STORE = Object.assign({},Backbone.Events,{

	data: { 
		items: [],
		uniqueIDCounter: 0
	},

	set: function(obj) {
		this.data = Object.assign(this.data, obj)
		this.trigger('dataUpdated')
	},

	createUniqueID: function() {
		return this.data.uniqueIDCounter++
	}
})

export default STORE