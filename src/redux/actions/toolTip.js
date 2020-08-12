import { TASK_TOOL_TIP } from './constants';

export const toggleTaskToolTip = () => {
    return (dispatch) => {
        return dispatch({ type: TASK_TOOL_TIP });
    }
};