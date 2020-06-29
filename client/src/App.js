import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ClassList from './components/ClassList';
import ClassInput from './components/ClassInput';
import ClassUpdate from './components/ClassUpdate';

function App() {
  return ( 
     <Router>
       
      <Route path="/" exact component={ClassList}/>
      <Route path="/input" component={ClassInput}/>
  
      <Route path="/update/:id" component={ClassUpdate}/>
      
      </Router>
      
    
  );
}

export default App;
