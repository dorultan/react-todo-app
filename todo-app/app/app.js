import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import TodoApp from './components/todo-app/todo-app.js';

// Styles
import './components/header/header.less';

// console.log(app);
class Root extends Component {

	constructor() {
		super();
		this.handleTaskStatus = this.handleTaskStatus.bind(this);
	}

	handleTaskStatus() {

	}

	render() {

		return (
			<div>
				<Header/>
				<TodoApp/>
			</div>
		)
	}
}

ReactDOM.render(<Root/>, document.getElementById('Root'));