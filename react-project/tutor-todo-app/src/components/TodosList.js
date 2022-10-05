import React from "react";

class TodosList extends React.Component {
  render() {
    return (
      <>
        <h1>Todos List</h1>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodosList;
