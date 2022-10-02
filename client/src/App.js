import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components';
import { Home, AddPhotographer, Search } from './pages';

function App() {
    // photographersList states
    const [photographersList, setPhotographersList] = useState([]);

    function handleAdd(list) {
        const newList = photographersList.concat(list);
        alert(`${list.first_name} has been registered as a Photographer.`)
        setPhotographersList(newList);
    }

    // Routing of the Application.
    // The routing also includes the props send out to each component
    return (
        <Router>
            <div className="app">
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