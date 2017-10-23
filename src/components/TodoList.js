import React from 'react';
import {connect} from 'react-redux';

const TodoListItem = ({id, task, isComplete}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete} />
        {task}
  </li>
)

const TodoList = (props) => console.log('Rendering TodoList') || (
    <div className="TodoList">
        <ul>
            {props.todos.map(todo => 
                <TodoListItem 
                    key={todo.id} 
                    {...todo}/>)}
        </ul>
  </div>
)

export default connect(
    (state) => ({todos: state.todos})
)(TodoList);