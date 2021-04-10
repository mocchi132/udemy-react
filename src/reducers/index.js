import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import events from './events';

export default combineReducers({ events, form })
// form: form の簡略後、form
// combineReducerに渡された引数は、このアプリの中に存在するreducerの一つとして追加される
