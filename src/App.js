import React from 'react';
import './App.css';
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Layout>
      <Header/>
       <Home/>
    </Layout>
        
    </div>
  );
}

export default App;
