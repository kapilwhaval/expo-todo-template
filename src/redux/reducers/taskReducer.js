import { ADD_TASK, UPDATE_TASK, RESET_LIST, DELETE_TASK, MARK_COMPLETE } from '../actions/constants';

const initialState = {
    todoList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, todoList: [...state.todoList, action.data] };
        case MARK_COMPLETE:
            return { ...state, todoList: state.todoList.filter((item, index) => { if (index === action.data) item.isCompleted = !item.isCompleted; return item; }) }
        case DELETE_TASK:
            return { ...state, todoList: state.todoList.filter((item, index) => { if (index !== action.data) return item; }) }
        case RESET_LIST:
            return { ...state, todoList: [] }
        default:
            return state;
    }
}