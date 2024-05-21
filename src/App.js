import { useState } from "react";
import TaskInputForm from './TaskInputForm.js';
import TaskListField from './TaskListField.js';
import styles from './style.css'


export default function App() {
      //state作成
      const [task, setTask] = useState('');
      const [taskList,setTaskList] = useState([]);
      
  return (
    <div className="container">
    <header><h1>ToDoアプリ</h1></header>
    <TaskInputForm
      task={task}
      taskList={taskList}
      onSetTask={setTask}
      onSetTaskList={setTaskList}
    />
    <TaskListField 
      task={task}
      taskList={taskList}
      onSetTaskList={setTaskList}
    />
    
    <footer>@2024</footer>
    </div>
  );
}