import todo from "./todo-reducer";

const todos = (state: any[] = [], action: any) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, todo(undefined, action)];
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.id);
        case "TOGGLE_TODO":
            return state.map(t => todo(t, action));
        case "RENAME_TODO":
            return state.map(t => todo(t, action));
        case "MOVE_TODO":
            let buffer = state[action.from];
            let new_state = [
                ...state.slice(0, action.from),
                ...state.slice(action.from + 1)
            ]
            if(action.to === state.length)
                new_state.push(buffer);
            else
                new_state = [
                    ...new_state.slice(0, action.to),
                    buffer,
                    ...new_state.slice(action.to)
                ];
            return new_state.filter(t => t);
        default:
            return state;
    };
};

export default todos;
