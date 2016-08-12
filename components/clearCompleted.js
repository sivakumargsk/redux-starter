import React from 'react';

const ClearCompleted = React.createClass ({
  render: function () {
    return (
      <input
        className='btn btn-danger'
        type='button'
        value='Clear Completed'
        onClick={this.props.clearCompleted} />
    );
  }
});

export default ClearCompleted
