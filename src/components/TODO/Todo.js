import React, { useEffect } from 'react';
import './Todo.css';
import Addtask from './Addtask';
import Listtask from './Listtask';
import { useState } from 'react';

const Todo= () => {
  const [tasks, setTasks] = useState([
    //{title:"Learn Html"},
    //{title: "Learn css"},
    //{title:"Learn Java"},
    //{title:"Learn JavaScript"}
  ]);
    useEffect(() => {
      document.title=`You Have ${tasks.length} Pending Task(s)`;
    }
);
  
  const addTask = (title) => {
    const newTask = [...tasks,{title}]
    setTasks(newTask);
  }

  const removeTask = (index) => {
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTasks(newTask)
  }  
  
  return (
    <>
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'>
              <Addtask  addTask={addTask}/>
            </div>
              <div className='tasks'>
                {tasks.map((task,index) => (
                  <Listtask task={task} removeTask={removeTask} index={index} key={index}k/>))}
                 </div>
            </div>
          
    </>
  )
}

export default Todo