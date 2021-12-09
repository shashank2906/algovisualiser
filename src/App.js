import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Algos from './Algos';
import './App.css';
import Search from './components/algos/Searching';
import Sort from './components/algos/Sorting';
import Back from './components/algos/Backtrack';

const App = () => {
  return (
    <BrowserRouter>
      
       <main>
       <Routes>
        <Route path='/' element = {<Algos />} exact/>
        <Route path='/searching' element ={<Search />} />
        <Route path='/sorting' element ={<Sort />} />
        <Route path='/backtracking' element ={<Back />} />

        
       </Routes>
       </main>

    </BrowserRouter>
  );
};

export default App;
