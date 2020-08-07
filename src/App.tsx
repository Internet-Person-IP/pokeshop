import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
const  App = () =>  {
  return (
    <div className="App">
      <Header/>
      <Card/>
    </div>
  );
}

export default App;
