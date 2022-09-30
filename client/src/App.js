import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components';
import { Home, AddPhotographer, Search } from './pages';

function App() {
    // photographersList states
    const [photographersList, setPhotographersList] = useState([]);

    function handleAdd(list) {
        const newList = photographersList.concat(list);
        alert(list.first_name)
        setPhotographersList(newList);
        console.log(photographersList)
    }

    // Routing
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route exact path ='/' element={<Home />}></Route>
                    <Route exact path ='/search' 
                        element={<Search 
                            list={photographersList} />}></Route>
                    <Route exact path ='/add' 
                        element={<AddPhotographer 
                            list={photographersList}
                            onAdd={handleAdd} />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;