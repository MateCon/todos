import { addTodo } from "../actions/todos-actions";
import { useDispatch } from "react-redux";
import "./AddTodo.css";

const AddTodo = ({ dummyRef }: any) => {
    const dispatch = useDispatch();
    let input: any = undefined;

    const setInput = (node: any) => input = node;

    const scrollDown = () => {
        dummyRef.current!.scrollIntoView({ behavior: "smooth" });
    };

    const onSubmit = (event: any) => {
        event.preventDefault();
        input.value && dispatch(addTodo(input.value));
        input.value = "";
        setTimeout(scrollDown, 0);
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
