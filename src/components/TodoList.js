import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from '../reducer/todo';

const TodoListItem = ({id, task, isComplete}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete} />
        {task}
  </li>
)

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos()
    }
    render() {
        return(<div className="TodoList">
        <ul>
            {this.props.todos.map(todo => 
                <TodoListItem 
                    key={todo.id} 
                    {...todo}/>)}
        </ul>
    </div>)
    }
};


export default connect(
    (state) => ({todos: state.todos}),
    {fetchTodos}
)(TodoList);