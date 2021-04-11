import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools} from 'redux-devtools-extension'

import './index.css'
import reducer from './reducers';
import EventsShow from './components/events_show';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';

import reportWebVitals from './reportWebVitals';

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventsNew} />
        // :(コロン)で、「/*」と同じ感じになる。
        // :(コロン)は最後！！
        // ⇨パスのマッピングは、上から順番に解決されるっぽいので、:(コロン)を先頭にすると、
        // 　全部:(コロン)の方にいっちゃうから。
        <Route path="/events/:id" component={EventsShow} />
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsIndex} />
        // exact パスの一致を厳格にする設定
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
