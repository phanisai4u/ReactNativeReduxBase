import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export const CreateStoreWithInitialState = (initialState = {}) => {
  return createStore(
  initialState,
  reducers,
  applyMiddleware(
    thunk,
  )
  );
};
