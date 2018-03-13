import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
)

export default App;
