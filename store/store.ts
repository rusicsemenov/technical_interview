import { combineReducers, legacy_createStore as createStore } from 'redux';
import exampleReducer from './example/example.reducer.ts';

export const reducers = combineReducers({
    example: exampleReducer,
});

export default createStore(reducers, {});
