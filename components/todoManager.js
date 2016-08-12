import React from 'react';
import NewTodo from './newTodo.js';
import TodoList from './todoList.js';
import TodoFotter from './fotter.js';
import store from './../state/store.js';
import { connect } from 'react-redux';

const TodoManager = React.createClass({
  getInitialState: function() {
     return {text: ''};
   },
   textOnChange: function(e) {
     this.setState({text: e.target.value});
   },
   addNewTodo: function() {
     store.dispatch({
       type: 'ADD_TODO',
       taskName: this.state.text});
     this.setState( {text: ''});
   },
   toggleTodo: function(todo) {
     store.dispatch({
       type: 'TOGGLE_TODO',
       taskId: todo.taskId});
   },
   removeTodo: function(todo) {
     store.dispatch({
       type: 'REMOVE_TODO',
       taskId: todo.taskId});
   },
   showAll: function (){
     store.dispatch({
       type: 'SET_VISIBILITY_FILTER',
       filter: 'SHOW_ALL'});
   },
   showCompleted: function (){
     store.dispatch({
       type: 'SET_VISIBILITY_FILTER',
       filter: 'SHOW_COMPLETED'});
   },
   showActive: function (){
     store.dispatch({
       type: 'SET_VISIBILITY_FILTER',
       filter: 'SHOW_ACTIVE'});
   },
   clearCompleted: function () {
     store.dispatch({type: 'CLEAR_COMPLETED'});
   },
  render: function () {
    return (
      <div>
        <NewTodo
         value={this.state.text}
         textOnChange={this.textOnChange}
         addOnClick={this.addNewTodo} />
      <TodoList
          todos={this.props.todos.todoTasks}
          visibilityFilter={this.props.filter}
          toggleTodo={this.toggleTodo}
          removeTodo={this.removeTodo} />
      <TodoFotter
         todos={this.props.todos.todoTasks}
         showAll={this.showAll}
         showCompleted={this.showCompleted}
         showActive={this.showActive}
         clearCompleted={this.clearCompleted}
      />
      </div>
  );
 }
});

const mapStateToProps = function (store) {
  return {
    todos: store.todos,
    filter: store.visibilityFilter
  };
}

export default connect (mapStateToProps) (TodoManager)
