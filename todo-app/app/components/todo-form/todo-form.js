import React, {Component} from 'react';
import './todo-form.less';
// @props - handleFormSubmit()
// 		  - handleTextChange()
// 		  - HandleDateChange()

class TodoForm extends Component {

	render() {
		return (
			<form onSubmit={this.props.handleFormSubmit} className="todo-form">
			 <div className="inp-w">
			  <input 
			  type="text"
			  placeholder="Add something to your tasks"
			  value={this.props.item.name}
			  onChange={this.props.handleTextChange}
			  />
			 </div>
			 <div className="inp-w">
			  <label>
			  	  On wich date ?

				  <input 
				  type="date"
				  name="date"
				  value={this.props.item.date}
				  onChange={this.props.handleDateChange}/>
			  </label>
			 </div>
			 <div className="submit-w">
			  <button type="submit">Add your task</button>
			 </div>
			</form>
		)
	}
}

export default TodoForm;