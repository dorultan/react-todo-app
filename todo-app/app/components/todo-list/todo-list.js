import React, {Component} from 'react';
import './todo-list.less';
// props - items[array]
//       - handleTaskStatus[function]
class TodoList extends Component {

	render() {

		return (

			<ul className="todo-list">
			 {
			 	this.props.items.map((item, index) =>{
			 		return (
			 			<li key={index}>{item.name} <input type="checkbox" checked={item.done} onChange={() => this.props.handleTaskStatus(index)}/></li>
			 		)
			 	})
			 	
			 }
			</ul>
		)
	}
}

export default TodoList;