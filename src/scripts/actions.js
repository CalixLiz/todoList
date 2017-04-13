import STORE from './STORE'

const ACTIONS = {

	addTask: function(newTask) {
		// add the task to the items list in our store.
		// set the new list, now 1 task bigger, on the store, causing the view to
		// rerender and reflect that change
		var itemsList = STORE.data.items
		itemsList.push({
			name: newTask,
			complete: false,
			uniqueID: STORE.createUniqueID()
		})
		STORE.set({
			items: itemsList
		})
	},

	deleteItem: function(id) {
		var itemsList = STORE.data.items
		// iterating through itemsList array...
		// ...at each iteration, if the uniqueID is equal to id at [i]...
		// ...take it out of the array using splice
		for (var i = 0; i < itemsList.length; i++) {
			if (itemsList[i].uniqueID === id) {
				itemsList.splice(i, 1)
			}
		}
		STORE.set({
			items: itemsList
		})
	}
}

export default ACTIONS