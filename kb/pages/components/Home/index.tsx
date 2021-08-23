import React from 'react';
import Dashboard from "../Dashboard/";
import TaskForm from "../Form/taskForm";
import TaskList from '../Task/taskList';
import { Main, BoardSection, LeftSideBar } from './styles'



const Home = () => {
  return (
    <Main>
      <LeftSideBar>
        <TaskForm />
        <TaskList />
      </LeftSideBar>
      
      <BoardSection>
        <Dashboard/>
      </BoardSection>
    
    </Main>
  )
}

export default Home;