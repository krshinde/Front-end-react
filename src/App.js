import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import TodoComponent1 from './component/Todo1/TodoComponent';
import TodoComponent2 from './component/Todo2/TodoComponent';
import TodoComponent3 from './component/Todo3/TodoComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TodoComponent1/>}/>
      <Route path='/todo-two' element={<TodoComponent2/>}/>
      <Route path='/todo-third' element={<TodoComponent3/>}/>
    </Routes>
       {/* <TodoComponent1/> */}
      {/* <TodoComponent/> */}
    
    </BrowserRouter>
 
  );
};

export default App;
