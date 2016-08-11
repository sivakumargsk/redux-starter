import React from 'react';
import TodoRow from './todoRow.js'

const TodoList = React.createClass({
  showTodoRow: function (todo) {
    return (
      <TodoRow
        key={todo.id}
        completed={todo.completed}
        taskName={todo.taskName} />
      );
  },
  render: function (){
    return (
      <div>
      {this.props.list.map(this.showTodoRow)}
      </div>
    );
  }
});

export default TodoList
