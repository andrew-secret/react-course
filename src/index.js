import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
    todos: [
        {id: 1, task: 'Render static UI', isComplete: true},
        {id: 2, task: 'Create initial state', isComplete: true},
        {id: 3, task: 'Render based on state', isComplete: false},
    ]
}



ReactDOM.render(<App todos={state.todos}/>, document.getElementById('root'));
registerServiceWorker();
