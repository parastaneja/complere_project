import { createStore } from 'redux';
import rootReducerMain from './reducer';


const store = createStore(rootReducerMain);

export default store;