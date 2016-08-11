import React from 'react';
import ItemsLeft from './itemsLeft.js'
import VisibilityFilters from './visibilityFilters.js'
import ClearCompleted from './clearCompleted.js'

const TodoFotter = React.createClass ({
  render: function () {
    return (
      <div>
        <ItemsLeft />
        <VisibilityFilters />
        <ClearCompleted />
      </div>
    );
  }
});

export default TodoFotter
