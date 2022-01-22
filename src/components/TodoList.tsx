import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";
import "./TodoList.css";
import { moveTodo } from "../actions/todos-actions";
import { useParams } from "react-router-dom";

const TodoList = () => {
    const todos: any = useSelector(store => store);
    const params = useParams();
    const dispatch = useDispatch();

    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        console.log(result.source, result.destination)
        dispatch(moveTodo(result.source.index, result.destination.index));
    };

    const filterTodo = (todo: any) => params.filter === "active" ? !todo.completed : (
        params.filter === "completed" ? todo.completed : true
    );

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <ul className="TodoList"  {...provided.droppableProps} ref={provided.innerRef}>
                        {todos.map((todo: any, index: number) => {
                            if (!filterTodo(todo)) return null;
                            return <Todo key={todo.id} {...{ ...todo, index }}>{todo.content}</Todo>
                        })}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TodoList;
