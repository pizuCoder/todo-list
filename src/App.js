import React, { useState } from 'react';
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from './ToDoList';
import './App.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
 
 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList}/>
   </div>
 );
}

const handleToggle = (id) => {
  let mapped  = toDoList.map(task => {
    return task.id == id ? { ...task, complete: !task.complete } : { ...task};
  });
  setToDoList(mapped);
}


const handleFilter = () => {
  let filtered = toDoList.filter(task => {
    return !task.complete;
  });
  setToDoList(filtered);
}

export default App;