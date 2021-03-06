import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxPromise from 'redux-promise';

import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';

import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter >
    <div>
      <Switch>
        <Route  path="/posts/new" component={PostsNew} /> 
        <Route  path="/" component={PostsIndex} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
