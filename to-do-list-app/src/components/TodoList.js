import React, { useEffect, useState } from 'react';
import './TodoList.css';

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTasksInput] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, done: false, dueDate }]);
      setTasksInput('');
      setDueDate('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const getDueDateColor = (dueDate) => {
    const current = new Date();
    const dueDateOj = new Date(dueDate);
    const time = dueDateOj - current;

    if(time < 0){
        return '#FF0000';
    }else if(time < 3*86400000){
        return '#FF8C00';
    }else {
        return '#B2E0D3';
    }
  };

  return (
    <div>
      <h1>My Work</h1>
      <div className='add-task-container'>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTasksInput(e.target.value)}
          placeholder='Add a new task'
        />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="tasks-container">
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Task</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTaskStatus(task.id)}
                  />
                </td>
                <td>{task.text}</td>
                <td>{task.dueDate && <span style={{ color: getDueDateColor(task.dueDate) }}>{task.dueDate}</span>}</td>
                <td>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todolist;  