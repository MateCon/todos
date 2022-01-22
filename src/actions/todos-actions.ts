export const addTodo = (content: string) => ({
    type: "ADD_TODO",
    content
});

export const removeTodo = (id: string) => ({
    type: "REMOVE_TODO",
    id
});

export const toggleTodo = (id: string) => ({
    type: "TOGGLE_TODO",
    id
});

export const renameTodo = (content: string, id: string) => ({
    type: "RENAME_TODO",
    content,
    id
});

export const moveTodo = (from: string, to: string) => ({
    type: "MOVE_TODO",
    from,
    to
});
