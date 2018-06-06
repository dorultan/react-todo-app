import React, {Component} from 'react';
import TodoForm from '../todo-form/todo-form';
import TodoList from '../todo-list/todo-list';
import './todo-app.less'

class TodoApp extends Component {

	constructor() {
		super();

		// item {name, date, done}

		this.state = {
			text: '',
			date: new Date(),
			items: [
			 {
			 	name: "Programming",
			 	done: true,
			 	date: new Date()
			 },
			 {
			 	name: "Skating",
			 	done: false,
			 	date: new Date()
			 },
			 {
			 	name: "Living",
			 	done: true,
			 	date: new Date()
			 }
			]
		};

		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleTaskStatus = this.handleTaskStatus.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
	}


	handleDateChange() {

		e.preventDefault();

		this.setState({
			date: e.target.value
		})
	}

	handleFormSubmit(e) {
	 	e.preventDefault();

	 	let item = {
	 		name: this.state.text,
	 		date: this.state.date,
	 		done: false
	 	};

	 	this.setState((prevState) => ({
	 		items: prevState.items.concat(item),
	 		text: '',
	 		date: new Date()
	 	}))
	}
	// @params - the task index;
	handleTaskStatus(index) {

		this.setState((prevState) => {
			prevState.items[index].done = !prevState.items[index].done;
			return {
				items: prevState.items
			}
		})
	}

	handleTextChange(e) {

		e.preventDefault();

		this.setState({
			text: e.target.value
		})

	}

	render() {
		return (

			<main className="app-main">
			 <div className="flex-col">
			  <TodoForm 
			   handleTextChange={this.handleTextChange}
			   handleFormSubmit={this.handleFormSubmit}
			   handleDateChange={this.handleDateChange}
			   item={this.state} 
			   />
			 </div>
			 <div className="flex-col">
			  <TodoList handleTaskStatus={this.handleTaskStatus} items={this.state.items}/>
			 </div>
			</main>		
		)
	}
}

export default TodoApp;