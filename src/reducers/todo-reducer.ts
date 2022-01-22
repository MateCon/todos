import { v4 as uuid } from "uuid";

interface Todo {
    id: string;
    content: string;
    date: string;
    completed: boolean;
};

const todo = (state: Todo | undefined, action: any) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                id: action.id || uuid(),
                content: action.content,
                date: action.date || new Date(),
                completed: false
            };
        case "TOGGLE_TODO":
            if(state!.id !== action.id) return state;
            return ({
                ...state,
                completed: !state!.completed
            });
        case "RENAME_TODO":
            if(state!.id !== action.id) return state;
            return ({
                ...state,
                content: action.content,
                date: new Date()
            });
        default:
            return state;
    };
};

export default todo;
