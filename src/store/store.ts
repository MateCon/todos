import { createStore } from 'redux';
import todos from "../reducers/todos-reducer";
import { loadState, saveState } from './localStorage';

const configStore = () => {
    const store = createStore(todos, loadState().todos || []);

    store.subscribe(() => saveState({ todos: store.getState() }));

    return store;
};

export default configStore;
