import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}

// function TodosList(props) {
//   return (
//     <div>
//       {props.todos.map(todo => (
//         <li>{todo.title}</li>
//       ))}
//     </div>
//   )
// }

export default TodosList;
