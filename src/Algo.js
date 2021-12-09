import React from 'react';

const Algo = (props) => {
    return (
        
    <div class='jumbotron p-2 flex-fill header text-center'>


      <script src={props.Script}></script>

      <lord-icon
        src={props.Lord}
        trigger='hover'
        colors='primary:#121331,secondary:#08a88a'
        style={{ width: '150px', height: '150px' }}
      ></lord-icon>

      <a href={props.name}><h3>{props.name}</h3></a>


    </div>
      
    );
}

export default Algo;
