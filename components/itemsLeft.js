import React from 'react';

function countOnlyTrue (num, todo) {
  return todo.completed? num: num+=1;
 }

const ItemsLeft = React.createClass ({
  render: function () {
    return (
      <span> {this.props.todos.reduce(countOnlyTrue, 0)} items left </span>
    );
  }
});

export default ItemsLeft
