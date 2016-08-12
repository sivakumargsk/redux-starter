import React from 'react';
import TodoRow from './todoRow.js'


const TodoList = React.createClass({
  getVisibleTodos: function (todos, filter){
    switch (filter) {
      case 'SHOW_ALL':
        return todos;

      case 'SHOW_COMPLETED':
        return todos.filter(function (i){
          return i.completed; }
        );
      case 'SHOW_ACTIVE':
       return todos.filter(function (i){
         return !i.completed; }
       );
       default:
        return todos;
    }
  },
  showTodoRow: function (todo) {
    return (
      <TodoRow
        key={todo.taskId}
        completed={todo.completed}
        taskName={todo.taskName}
        checkOnChange={this.props.toggleTodo.bind(null, todo)}
        removeOnClick={this.props.removeTodo.bind(null, todo)} />
      );
  },
  render: function (){
    return (
      <div>
      {this.getVisibleTodos(this.props.todos, this.props.visibilityFilter).map(this.showTodoRow)}
      </div>
    );
  }
});

export default TodoList
