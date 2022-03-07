import React from 'react';
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
  }

  render() {
    return (
      <div>
        <header>
          <h1>Phinn's To-Do List</h1>
        </header>
        <AddTodoForm />
        <TodoList todoItems={this.state.todoItems} />
      </div>
    )
  }
}

export default App;
