import Task from "../Task/Task";
import './TaskList.css';


const TaskList = ({taskItems}) => {
    const taskItem = taskItems.map((item) => {
        const {id, state, ...itemText} = item;
        return (
            <li key={item.id} className={item.state}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label><Task itemText={itemText}/></label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
                {item.state === 'editing' ? <input type="text" className="edit" value="Editing task"/> : null}
            </li>
        );
    });

    return (
        <ul className="todo-list">
            {taskItem}
        </ul>
    );
}


export default TaskList;