import React from 'react';

const NewTodo = React.createClass({

  render: function (){
    return (
      <div>
       <input
         type='text'
         value={this.props.value}
         onChange={this.props.textOnChange}
        />
       <input type='button' value='add' onClick={this.props.addOnClick} />
     </div>
   );
  }
});

export default NewTodo
