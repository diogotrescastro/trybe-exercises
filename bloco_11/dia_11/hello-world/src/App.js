import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar café' , 'Trabalhar' , 'Almoçar' , 'Estudar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map(gettask => Task(gettask)) }</ul>
    );
  }
}

export default App;
