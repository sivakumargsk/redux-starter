
// todo reducer
var data = [
  {taskId: 1, taskName: 'learning Clojure', completed: true},
  {taskId: 2, taskName: 'learning Redux', completed: false},
  {taskId: 3, taskName: 'learning React', completed: false}
]

export const todoReducer = function (state = {tasks: data, nextId: 4}, action) {
  switch (action.type) {
  case 'ADD_TODO':
     var newTodos = state.tasks.concat(
       [{taskId: state.nextId,
         taskName: action.taskName,
         completed: true}];
     var newNextId = state.nextId + 1;
     return {tasks: newTodos, nextId: newNextId};

  case 'TOGGLE_TODO':
    var toggleTodo = state.tasks.map(function (i) {
      if (i.taskId == action.taskId) {
        return Object.assign({}, i, {completed: !i.completed });
      }else{
        return i;
      }});
    return {tasks: toggleTodo, nextId: state.nextId };

  case 'REMOVE_TODO':
    var remainingTodos = state.tasks.filter( function (i) {
      if (i.taskId != action.taskId){
        return i;
      }});
    return { tasks: remainingTodos, nextId: state.nextId });

  case 'CLEAR_COMPLETED':
    var remainingTodos = state.tasks.filter( function (i) {
      if (i.completed == false){
        return i;
      }});
    return { tasks: remainingTodos, nextId: state.nextId});

  default:
    return state
  }
}

// visibilityFilter reducer
export const visibilityFilterReducer = function (state = 'SHOW_ALL', action){
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}
