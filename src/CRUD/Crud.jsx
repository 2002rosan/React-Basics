import { useState } from "react";

const Crud = () => {
  const [addTask, setAddTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    const TaskList = [...addTask, newTask];
    setAddTask(TaskList);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h1>TODO LIST</h1>
      </div>
      <div>
        <input onChange={handleChange} />
        <button onClick={handleClick}>Add Task</button>
        <div>
          {addTask.map((Task, idx) => {
            return (
              <h1>
                {idx + 1}. {Task}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Crud;
