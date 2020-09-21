import { createStore } from 'redux';
import reducer from '../reducers';

const inititalState = {
    tech: 'React'
};
export const store = createStore(reducer, inititalState);