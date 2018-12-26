//合并所以reducer，并返回

import {combineReducers} from 'redux';
import { counter } from './App.redux'
import { auth } from './Auth.redux'
const reducers=combineReducers({counter,auth})
export default reducers
// export default counter