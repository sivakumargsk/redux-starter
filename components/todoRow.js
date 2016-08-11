import React from 'react';

const TodoRow = React.createClass({
  render: function () {
    return (
      <div>
        <input type='checkbox' checked={this.props.completed}
              //  onChange={this.props.toggleTodo}
               />
        <span> {this.props.taskName} </span>
        <input type='button' value='Remove'
              //  onClick={this.props.removeTodo}
                />
      </div>
    );
  }
});

export default TodoRow
