import todos from "./todos-reducer";

test("default case", () => {
    const stateBefore = [{
        id: "0",
        content: "Do the dishes",
        date: "2022-01-19T23:32:03.355Z",
        completed: false
    }];
    const action = {
        type: "NOT_KNOWN_ACTION"
    };
    const stateAfter = stateBefore;
    expect(todos(stateBefore, action)).toEqual(stateAfter);
});

test("add todo", () => {
    const stateBefore = [{
        id: "0",
        content: "Do the dishes",
        date: "2022-01-19T23:32:03.355Z",
        completed: false
    }];
    const action = {
        type: "ADD_TODO",
        id: "1",
        content: "Do homework",
        date: "2022-01-19T23:32:03.355Z"
    };
    const secondAction = {
        type: "ADD_TODO",
        content: "Do homework"
    };
    const stateAfter = [
        {
            id: "0",
            content: "Do the dishes",
            date: "2022-01-19T23:32:03.355Z",
            completed: false
        },
        {
            id: "1",
            content: "Do homework",
            date: "2022-01-19T23:32:03.355Z",
            completed: false
        }
    ];
    expect(todos(stateBefore, action)).toEqual(stateAfter);
    expect(todos(stateBefore, secondAction)[1].content).toEqual("Do homework");
});

test("remove todo", () => {
    const stateBefore = [
        {
            id: "0",
            content: "Do the dishes",
            date: "2022-01-19T23:32:03.355Z",
            completed: false
        },
        {
            id: "1",
            content: "Do homework",
            date: "2022-01-19T23:32:03.355Z",
            completed: false
        }
    ];
    const action = {
        type: "REMOVE_TODO",
        id: "1"
    };
    const stateAfter = [
        {
            id: "0",
            content: "Do the dishes",
            date: "2022-01-19T23:32:03.355Z",
            completed: false
        }
    ];
    expect(todos(stateBefore, action)).toEqual(stateAfter);
});

test("toggle todo", () => {
    const stateBefore = [{
        id: "0",
        content: "Do the dishes",
        date: "2022-01-19T23:32:03.355Z",
        completed: false
    }];
    const action = {
        type: "TOGGLE_TODO",
        id: "0"
    };
    const stateAfter = [{
        id: "0",
        content: "Do the dishes",
        date: "2022-01-19T23:32:03.355Z",
        completed: true 
    }];
    expect(todos(stateBefore, action)).toEqual(stateAfter);
});

test("rename todo", () => {
    const stateBefore = [{
        id: "0",
        content: "Do the dishes",
        date: "2022-01-19T23:32:03.355Z",
        completed: false
    }];
    const action = {
        type: "RENAME_TODO",
        id: "0",
        content: "This is the new content"
    };
    const stateAfter = [{
        id: "0",
        content: "This is the new content",
        date: "2022-01-19T23:32:03.355Z",
        completed: false
    }];
    const result = todos(stateBefore, action);
    expect(result[0].content).toEqual(stateAfter[0].content);
    expect(result[0].date === stateBefore[0].date).toBeFalsy();
});

test("move case", () => {
    const stateBefore = [
        {
            id: "0",
            content: "Do the dishes",
            date: "2022-01-19T23:32:03.355Z",
            completed: false
        },
        {
            id: "1",
            content: "Do homework",
            date: "2022-01-19T23:32:03.355Z",
            completed: true
        },
        {
            id: "2",
            content: "Go to sleep",
            date: "2022-01-19T23:32:03.355Z",
            completed: false
        }
    ];
    const action = {
        type: "MOVE_TODO",
        from: 0,
        to: 1
    };
    const stateAfter = [
        {
            id: "1",
            content: "Do homework",
            date: "2022-01-19T23:32:03.355Z",
            completed: true
        },
        {
            id: "0",
            content: "Do the dishes",
            date: "2022-01-19T23:32:03.355Z",
            completed: false
        },
        {
            id: "2",
            content: "Go to sleep",
            date: "2022-01-19T23:32:03.355Z",
            completed: false
        }
    ];
    expect(todos(stateBefore, action)).toEqual(stateAfter);
});
