import React from 'react';

const ClearCompleted = React.createClass ({
  render: function () {
    return (
      <input type='button'
             value='Clear Completed'
             //  onClick={this.props.clearOnclick}
             />
    );
  }
});

export default ClearCompleted
