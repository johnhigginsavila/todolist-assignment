import React from 'react';
import Footer from './Footer';
import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <h1>My Todo List!!!s</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;

