import React from 'react';
import ItemsLeft from './itemsLeft.js'
import VisibilityFilters from './visibilityFilters.js'
import ClearCompleted from './clearCompleted.js'

const TodoFotter = React.createClass ({
  render: function () {
    return (
      <div>
        <ItemsLeft todos={this.props.todos} />
        <VisibilityFilters
          showAll={this.props.showAll}
          showCompleted={this.props.showCompleted}
          showActive={this.props.showActive}
        />
        <ClearCompleted clearCompleted={this.props.clearCompleted}/>
      </div>
    );
  }
});

export default TodoFotter
