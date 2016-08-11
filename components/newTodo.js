import React from 'react';

const NewTodo = React.createClass({
  render: function (){
    return (
      <div>
       <input type='text' />
       <input type='button' value='add' />
     </div>
   );
  }
});

export default NewTodo
