import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { NavBar } from './components';
import { Home, AddPhotographer, Search } from './pages';

function App() {
    // Routing
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route exact path ='/' element={<Home/ >}></Route>
                    <Route exact path ='/search' element={<Search/ >}></Route>
                    <Route exact path ='/add' element={<AddPhotographer />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;