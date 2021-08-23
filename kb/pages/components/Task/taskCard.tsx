import { Card } from './styles'
interface Task{
    id?:number,
    name?:string,
}

const TaskCard = ({name} :Task) =>{
    
    return (
        <Card draggable>{name}</Card>
        )
        
      
    
}

export default TaskCard; 