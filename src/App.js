import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searching from './components/searching';
import Sorting from './components/sorting';
import Backtracking from './components/backtracking';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div class='container-fluid text-center outer'>
        <lord-icon
          src='https://cdn.lordicon.com/dzllstvg.json'
          trigger='loop'
          colors='primary:#121331,secondary:#915110'
          stroke='62'
          scale='47'
          style={{ width: '250px', height: '250px' }}
        ></lord-icon>

        <h1>Algo-Desk</h1>
      </div>

      <div class='container-fluid d-flex justify-content-around flex-wrap'>
        <Sorting />
        <Searching />
        <Backtracking />
      </div>
    </BrowserRouter>
  );
};

export default App;
