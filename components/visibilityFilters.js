import React from 'react';

const VisibilityFilters = React.createClass ({
  render: function () {
    return (
      <div className='btn-group'>
        <input
          className='btn btn-primary'
          type='button'
          value='Show All'
          onClick = {this.props.showAll} />
        <input
          className='btn btn-primary'
          type='button'
          value='Show Completed'
          onClick = {this.props.showCompleted} />
        <input
          className='btn btn-primary'
          type='button'
          value='Show active'
          onClick = {this.props.showActive} />
      </div>
    );
  }
});

export default VisibilityFilters
