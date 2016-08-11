import React from 'react';
import ReactDOM from 'react-dom';

const Counter = React.createClass({
  render: function() {
    return (
        <div>
        <span>{this.props.value}</span>
        <input type="button" value= "+" onClick={this.props.increment} />
        <input type="button" value= "-" onClick={this.props.decrement} />
        </div> );
      }
  });

export default Counter
