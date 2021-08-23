import {useRef} from 'react';
import TaskCard from './taskCard';
import {useTask} from '../../context/TaskContext';
import { Title } from '../Dashboard/styles';
import { Ul } from './styles';

const noTaskString = 'There are no tasks for you today!'


const TaskList = () =>{
    const {taskList} = useTask()  
    let taskCountString = `Now you have ${taskList.length} task(s) to accomplish today!`  
    const dragItem = useRef();

    const handleDragStart = event =>{
        const currentItem = dragItem.current;

    }
    return(
        
        taskList.length > 0 ?(
    
       <> 
        <Title>{taskCountString}</Title>
        <Ul >{taskList?.map(task => <li key={task?.id}
                                        draggable
                                        onDragStart={event => handleDragStart(event)}> 
                                        <TaskCard name={task.name}/></li> ) } </Ul>
       </> )
        :
        <Title>{noTaskString}</Title>
    )
     
}

export default TaskList ;