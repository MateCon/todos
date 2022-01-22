import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filters from "./Filters";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <AddTodo />
            <Filters />
            <TodoList />
            <Footer />
        </div>
    );
};

export default App;
