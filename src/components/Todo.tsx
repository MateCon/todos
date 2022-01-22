import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../actions/todos-actions";
import { Draggable } from "react-beautiful-dnd";
import "./Todo.css";
import DragIcon from "./DragIcon";

const Todo = ({ children, id, completed, index }: any) => {
    const dispatch = useDispatch();

    const remove = () => {
        dispatch(removeTodo(id));
    };

    const toggle = () => {
        dispatch(toggleTodo(id));
    };

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <li className="Todo"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    onClick={toggle}
                >
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 20 }}>
                        <DragIcon {...provided.dragHandleProps} />
                        <div style={{
                            textDecoration: completed ? "line-through" : "none",
                            color: completed ? "gray" : "white"
                        }}><p>{children}</p></div>
                    </div>
                    {completed && <aside className="Remove" onClick={remove}>.</aside>}
                </li>
            )}
        </Draggable>
    )
};

export default Todo;