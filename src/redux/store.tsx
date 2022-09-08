import thunk from 'redux-thunk';
import CalendarStore from './reducer/CalendarStore'
import { createStore, applyMiddleware, combineReducers } from 'redux'

export default createStore(combineReducers({
  CalendarStore,
  }), applyMiddleware(thunk))