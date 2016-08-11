import React from 'react';
import NewTodo from './newTodo.js';
import TodoList from './todoList.js';
import TodoFotter from './fotter.js';

var data = [
  {id: 1, taskName: 'learning Clojure', completed: true},
  {id: 2, taskName: 'learning Redux', completed: false},
  {id: 3, taskName: 'learning React', completed: false}
]

const TodoManager = React.createClass({
  render: function () {
    return (
      <div>
        <NewTodo />
        <TodoList list={data} />
        <TodoFotter />        
      </div>
    );
  }
});

export default TodoManager
