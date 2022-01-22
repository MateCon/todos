import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./AddTodo.css";
import "./Filters.css";

const Filters = () => {
    const params = useParams();

    return (
        <div className="Filters">
            <Link to="/"><button className={!params.filter ? 'active' : ''}>All</button></Link>
            <Link to="/active"><button style={{
                borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                borderRight: "1px solid rgba(255, 255, 255, 0.2)"
            }} className={params.filter === 'active' ? 'active' : ''}>Active</button></Link>
            <Link to="/completed"><button className={params.filter === "completed" ? 'active' : ''}>Completed</button></Link>
        </div>
    );
};

export default Filters;