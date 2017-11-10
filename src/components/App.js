import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';
import ConContent from '../containers/ConContent';

const App = () => (
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <div>
            <ConContent/>
        </div>
    </Provider>
);

export default App;