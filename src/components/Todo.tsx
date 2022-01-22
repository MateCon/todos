import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, renameTodo, toggleTodo } from "../actions/todos-actions";
import { Draggable } from "react-beautiful-dnd";
import DragIcon from "./DragIcon";
import "./Todo.css";

const Input = ({ newName, setNewName, setShowRename }: any) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current!.focus();
    }, []);

    return <input
        type="text"
        value={newName}
        onChange={(e: any) => setNewName(e.target.value)}
        onBlur={() => { setShowRename(false) }}
        ref={inputRef}
    />
};

const Todo = ({ children, id, completed, index }: any) => {
    const dispatch = useDispatch();
    const [isOver500ms, setIsOver500ms] = useState(false);
    const [interval, setInterval] = useState<any>(null);
    const [showRename, setShowRename] = useState(false);
    const [newName, setNewName] = useState(children);

    const onMouseDown = () => {
        setInterval(setTimeout(() => setIsOver500ms(true), 500));
    };

    const onMouseUp = () => {
        interval && clearTimeout(interval!);
        if (!isOver500ms) {
            toggle();
        } else {
            setShowRename(true);

        }
        setIsOver500ms(false);
        setInterval(null);
        setNewName(children);
    };

    const remove = () => {
        dispatch(removeTodo(id));
    };

    const toggle = () => {
        dispatch(toggleTodo(id));
    };

    useEffect(() => {
        const rename = () => {
            if (newName) dispatch(renameTodo(newName, id));
        };

        return document.addEventListener("keypress", (e: any) => {
            if (e.key === "Enter") {
                setShowRename(false);
                rename();
            }
        });
    }, [dispatch, id, newName]);

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <li className="Todo"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 20 }}>
                        <DragIcon {...provided.dragHandleProps} />
                        <div style={{
                            textDecoration: completed ? "line-through" : "none",
                            color: completed ? "gray" : "white"
                        }}>
                            {
                                showRename
                                    ? <Input {...{ newName, setNewName, setShowRename }} />
                                    : <p
                                        onMouseDown={onMouseDown}
                                        onMouseUp={onMouseUp}
                                    >{children}</p>
                            }
                        </div>
                    </div>
                    {completed && <aside className="Remove" onClick={remove}>.</aside>}
                </li>
            )}
        </Draggable>
    )
};

export default Todo;