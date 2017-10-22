const initialState = {
    todos: [
        {id: 1, task: 'Render static UI', isComplete: true},
        {id: 2, task: 'Create initial state', isComplete: true},
        {id: 3, task: 'Render based on state', isComplete: false},
    ],

    currentTodo: '',
};

const TODO_ADD = 'TODO_ADD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});

export default (state = initialState, action) => {
    switch(action.type) {
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload)}
        
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        default:
            return state;
    }
};