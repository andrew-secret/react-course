import React from 'react';

const TodoListItem = ({id, task, isComplete}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete} />
        {task}
  </li>
)

export default (props) => (
    <div className="TodoList">
        <ul>
            {props.todos.map(todo => 
                <TodoListItem 
                    key={todo.id} 
                    {...todo}/>)}
        </ul>
  </div>
)