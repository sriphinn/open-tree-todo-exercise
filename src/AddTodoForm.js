import React from 'react';

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const todoList = [...this.state.Todo]
  }

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            value='text'
            placeholder='type in your to-do here'
            aria-label='Todo Item'
          />
          <button type='submit' onSubmit={this.handleSubmit}>Add Todo</button>
        </form>
        <NewTodoList />
      </div>
    )
  }
}