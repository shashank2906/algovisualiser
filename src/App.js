import React from 'react';
import ReactDOM from 'react-dom';
 
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import './App.css';

class App extends React.Component {
   render() {
      return (
        <div>
          <Home />
          <About />
          <Contact />
        </div>
      )
   }
}
export default App;