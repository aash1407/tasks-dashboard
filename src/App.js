import React from 'react';
import TaskList from './components/TaskList/TaskList';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header/Header';
import TaskStats from './components/TaskStats/TaskStats';


const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <Header />
        <AddTaskForm />
        <TaskList />
        <TaskStats />
      </div>
    </TaskProvider>
  );
};

export default App;
