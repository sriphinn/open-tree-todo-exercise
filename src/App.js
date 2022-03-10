import React from 'react';
import uuid from 'react-uuid';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { todo: 'water plants', completed: false, id: 1 },
        { todo: 'cook lunch', completed: false, id: 2 }
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleComplete = this.handleComplete.bind(this);
    // this.handleDelete = this.handleComplete.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState(prevState => ({ 
      todoItems: [...prevState.todoItems, {todo: event.target.value, completed: false, id: uuid()}]
    }))
    console.log(FormData)
  }

  // Function to toggle completed value
  // handleComplete() {

  // }

  // function to delete object from state Array
  // handleDelete() {

  // }

  render() {
    return (
      <div>
        <header>
          <h1>Phinn's To-Do List</h1>
        </header>
        <form type='submit' onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='What do you need to do?'
            aria-label='Todo Item'
          />
          <button>Add Todo</button>
        </form>
        <ul>
          {this.state.todoItems.map(item => (
            <li key={item.id}>
              <p>{item.todo}</p>
              <button type='checkbox' onClick={this.handleComplete}>Complete</button>
              <button onClick={this.handleDelete}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
