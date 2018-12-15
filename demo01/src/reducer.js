//合并所以reducer，并返回

import {combineReducers} from 'redux';
import { counter } from './index.redux'
import { auth } from './Auth.redux'
const tt=combineReducers({counter,auth})
export default tt
// export default counter