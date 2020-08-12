import { TASK_TOOL_TIP } from '../actions/constants';

const initialState = {
    showTaskToolTip: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TASK_TOOL_TIP:
            return { ...state, showTaskToolTip: !state.showTaskToolTip };
        default:
            return state;
    }
}