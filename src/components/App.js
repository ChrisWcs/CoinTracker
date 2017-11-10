import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from "../reducers/reducer";

const App = () => (
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <div>
            
        </div>
    </Provider>
);