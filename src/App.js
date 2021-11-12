import './App.css';
import {Switch ,Route} from 'react-router'

import Home from './components/home';
import About from './components/about';
import Error from './components/error';
import Navbar from './components/nav';

function App() {
  return (
 
    <main> 

      

    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        
    </Switch>
</main>
   
  );
}

export default App;
