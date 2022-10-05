import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import { NavBar } from "./components";
import { Home, AddPhotographer, Search, Cloud } from "./pages";

function App() {
  // photographersList states
  const [photographersList, setPhotographersList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // sends GET request for the data to the backend
  async function getData() {
    await axios("http://localhost:5000/photographers")
      .then((response) => {
        setPhotographersList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => {
        console.log("Success");
      });
  }

  // sends POST request of data to the backend
  async function handleAdd(list) {
    axios({
      method: "post",
      url: "http://localhost:5000/photographers",
      data: [
        {
          first_name: list.first_name,
          last_name: list.last_name,
          age: list.age,
          city: list.city,
        },
      ],
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    alert(`${list.first_name} has been registered as a Photographer.`);
  }

  // send DELETE request of data to the backend
  async function handleDelete(list) {
    axios({
      method: "delete",
      url: "http://localhost:5000/photographers",
      data: [
        {
          first_name: list.first_name,
        },
      ],
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Function to Modify Data
  async function handleModify(list) {
    axios({
      method: "put",
      url: "http://localhost:5000/photographers",
      data: [
        {
          first_name: list.first_name,
          updateData: list.updateData,
        },
      ],
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Routing of the Application.
  // The routing also includes the props send out to each component
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/search"
            element={<Search list={photographersList} />}
          ></Route>
          <Route
            exact
            path="/add"
            element={
              <AddPhotographer list={photographersList} onAdd={handleAdd} />
            }
          ></Route>
          <Route
            exact
            path="/module2"
            element={
              <Cloud
                list={photographersList}
                onAdd={handleAdd}
                onDelete={handleDelete}
                onModify={handleModify}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
