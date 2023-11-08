import Task from "../Task/Task";
import './TaskList.css';


const TaskList = () => {
    return (
        <ul className="todo-list">
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <Task/>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
            </li>
        </ul>);
}


export default TaskList;