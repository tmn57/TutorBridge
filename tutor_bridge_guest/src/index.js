import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk'
import App from './App';

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// ReactDOM.render(
//     <Provider>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
ReactDOM.render(<App />, document.getElementById('root'));
