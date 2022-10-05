import React from "react";
import TodosList from "./TodosList";

class TodoContainer extends React.Component {
  // Language: javascript
  state = {
    todos: [
      { id: 1, title: "Take out the trash", completed: false },
      { id: 2, title: "Dinner with wife", completed: false },
      { id: 3, title: "Meeting with boss", completed: true },
    ],
  };
  render() {
    return (
      <>
        <TodosList todos={this.state.todos} />
        <TodosList todos={this.state.todos} />
        <TodosList todos={this.state.todos} />
      </>
    );
  }
}

export default TodoContainer;
