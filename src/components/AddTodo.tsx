import { addTodo } from "../actions/todos-actions";
import { useDispatch } from "react-redux";
import "./AddTodo.css";

const AddTodo = () => {
    const dispatch = useDispatch();
    let input: any = undefined;

    const setInput = (node: any) => input = node;

    const onSubmit = (event: any) => {
        event.preventDefault();
        input.value && dispatch(addTodo(input.value));
        input.value = "";
    };

    return <AddTodoUI  {...{ setInput, onSubmit }} />;
};

const AddTodoUI = ({ onSubmit, setInput }: any) => (
    <form {...{ onSubmit }} className="AddTodo">
        <input type="text" ref={setInput} />
        <button>Add</button>
    </form>
);

export default AddTodo;
