import React from 'react';
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import './App.css'
import Home from './Pages/Home/Home.jsx';


function App() {
  return (
    <div className="App">
          <Router>
            <Header/>
            
            <Routes>
              <Route index element={<Home/>}></Route>
              <Route path='movie/:id' element={<h1>Movie detail page </h1>}></Route>
              <Route path='movies/:type' element={<h1>Movies list page</h1>}></Route>
              <Route path='/*' element={<h1>Error Page</h1>}></Route>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
