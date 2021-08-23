
import {createContext, useContext, useState} from 'react'

interface Task{
    id?:number,
    name?:string
}

interface Context{
    task?:Task,
    taskList?:Task[],
    setTask():Task,
    setTaskList():Task[]
}

const TaskContext = createContext<Task>(null)

 export default function TaskProvider({children}){
    
    const[taskList, setTaskList] = useState<Task[]>([])

    return (
        <TaskContext.Provider
            value={{taskList,setTaskList}}
        >
            {children}

        </TaskContext.Provider>
    )
}

export function useTask(){
    const context = useContext(TaskContext);
    if(!context) throw new Error('useContext must be used within TaskProvider');
    const { task, setTask, taskList, setTaskList }:Context = context;
    return {task, setTask, taskList, setTaskList};
}