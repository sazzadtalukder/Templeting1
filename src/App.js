import React from 'react';
import './App.css';

import Header from './MyComponent/Header';
import Navbar from './MyComponent/Navbar';
import PageContent from './MyComponent/PageContent';
import Footer from './MyComponent/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <PageContent></PageContent>
        <Footer></Footer>
        



      </div>
    </div>
  );
}
 
export default App;
