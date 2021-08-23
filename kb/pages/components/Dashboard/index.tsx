import React from 'react';
import { Title, Board, Column } from './styles'


const Dashboard = () => {
  return (
    <Board>
      <Column>
        <Title>Awaiting</Title>
      </Column>

      <Column>
        <Title>To Do</Title>
      </Column>

      <Column>
        <Title>Doing</Title>
      </Column>
      
      <Column>
        <Title>Done</Title>
      </Column>
    </Board>
  )
}

export default Dashboard;