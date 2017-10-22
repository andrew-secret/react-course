const initialState = {
    todos: [
        {id: 1, task: 'Render static UI', isComplete: true},
        {id: 2, task: 'Create initial state', isComplete: true},
        {id: 3, task: 'Render based on state', isComplete: false},
    ],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)}
        default:
            return state;
    }
};