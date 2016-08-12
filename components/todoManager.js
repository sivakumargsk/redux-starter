import React from 'react';
import NewTodo from './newTodo.js';
import TodoList from './todoList.js';
import TodoFotter from './fotter.js';
import store from './../state/store.js';

const TodoManager = React.createClass({
  render: function () {
    return (
      <div>
        <NewTodo />
        <TodoList list={store.todos} />
        <TodoFotter />        
      </div>
    );
  }
});

export default TodoManager
