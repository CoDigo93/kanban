import React from "react";
import Home from './components/Home/'
import TaskProvider from './context/TaskContext';



interface Task{
  id:number,
  name:string
}



const App = () => {
  
  return (
    <TaskProvider>
      <Home/>
    </TaskProvider>
  )
}

export default App;