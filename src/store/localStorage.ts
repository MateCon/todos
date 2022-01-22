export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (!serializedState) return [];
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (err) {
        console.log(err);
    }
};
