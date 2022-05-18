
import React from 'react';
import Aler from './components/Aler';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/Container';
import Map from './components/Map';
const App = () => {
  return (
    <div className='contan'>
      <h1>bahroms</h1>
          <Router>
            <Routes>
              <Route path="/" element={<Container/>}/> 
            </Routes>
          </Router>
    </div>
  );
};

export default App;
