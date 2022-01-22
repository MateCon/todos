import { useRef } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filters from "./Filters";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

const App = () => {
    const dummyRef = useRef<HTMLDivElement>(null);

    return (
        <div className="App">
            <Header />
            <AddTodo dummyRef={dummyRef} />
            <Filters />
            <TodoList dummyRef={dummyRef} />
            <Footer />
        </div>
    );
};

export default App;
