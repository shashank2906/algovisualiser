import React from 'react';
import Algo from './Algo';

const Algos = () => {
  return (
    <div>
      <header>
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
      </header>

      <div class='container-fluid d-flex justify-content-around flex-wrap'>
        <Algo
          name='searching'
          Script='https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js'
          Lord='https://cdn.lordicon.com/kbtmbyzy.json'
        />

        <Algo
          name='sorting'
          Script='https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js'
          Lord='https://cdn.lordicon.com/wxnxiano.json'
        />

        <Algo
          name='backtracking'
          Script='https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js'
          Lord='https://cdn.lordicon.com/sbiheqdr.json'
        />
      </div>
    </div>
  );
};

export default Algos;
