import React from 'react';
import Routes from './core/routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'

function App() {
  const childProps = {
    isAuthenticated: true,
    loading: false
};

  return (
    <div className="App">
    
     <Routes childProps={childProps} />
    
    </div>
  );
}

export default App;
