import { ADD_TASK, UPDATE_TASK, RESET_LIST, DELETE_TASK, MARK_COMPLETE } from './constants';

export const addTask = (taskDetails) => {
    return (dispatch) => {
        return dispatch({ type: ADD_TASK, data: taskDetails });
    }
};

export const markAsComplete = (taskIndex) => {
    return (dispatch) => {
        return dispatch({ type: MARK_COMPLETE, data: taskIndex });
    }
};

export const resetTaskList = () => {
    return (dispatch) => {
        return dispatch({ type: RESET_LIST });
    }
};

export const deleteTask = (taskIndex) => {
    return (dispatch) => {
        return dispatch({ type: DELETE_TASK, data: taskIndex });
    }
};