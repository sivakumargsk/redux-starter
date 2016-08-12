import React from 'react';

const TodoRow = React.createClass({
  render: function () {
    return (
      <div>
        <input
         type='checkbox'
         checked={this.props.completed}
         onChange={this.props.checkOnChange}
        />
        <span
          style={{cursor: 'pointer'}}
          onClick={this.props.checkOnChange}> {this.props.taskName}
          </span>
        <input
         type='button'
         value='Remove'
         onClick={this.props.removeOnClick}
        />
      </div>
    );
  }
});

export default TodoRow
