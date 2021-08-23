import { useState } from "react";
import { useTask } from '../../context/TaskContext';
import { Title } from "../Dashboard/styles";
import { Input, Label, Form } from './styles'
 
const TaskForm = () =>{
const [input, setInput] = useState<string>('');
const { task, setTask, taskList, setTaskList } = useTask();
const [formTask , setFormTask] = useState({});



const handleInput = (e) =>{
    setInput(e.target.value);
    
    const id = Math.random()
    setFormTask({id:id,name:e.target.value});
    
}

const handleSubmit = (e) =>{
    e.preventDefault();
    setTaskList([...taskList, formTask]);
    setInput('');
}

return(

    <Form onSubmit={handleSubmit}>
        
        <Input type='form'
                name='taskInput'
                onChange={(e) => handleInput(e)}
                value={input}
                required
        />
        <Label htmlFor="taskInput">Create a task</Label>
    </Form>
    
)

              
    
}

export default TaskForm;