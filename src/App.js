import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error from './pages/Error';


const App = () => {
    return ( 
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
    </BrowserRouter>
    
    );
};

export default App;