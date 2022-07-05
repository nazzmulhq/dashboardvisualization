import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducers';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const persister = persistStore(store);

console.log('in store index.ts: ', store);

export { store, persister };
