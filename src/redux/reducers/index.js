import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import toolTipReducer from './toolTipReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
    loginDetails: loginReducer,
    taskToolTip: toolTipReducer,
    taskList: taskReducer
})

export default rootReducer;