import { React, useState, useEffect } from "react";
import { Add, Delete, Modify } from "..";
import PhotographersFeed from "../../Photographers/PhotographersFeed/PhotographersFeed";
import axios from "axios";

function AdminPage(props) {
  const [toggle, setToggle] = useState(false);
  const [photographersList, setPhotographersList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // sends GET request for the data to the backend
  async function getData() {
    await axios("/photographers")
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
      url: "/photographers",
      data: [
        {
          first_name: list.first_name,
          last_name: list.last_name,
          age: list.age,
          city: list.city,
          img: list.img,
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
      url: "/photographers",
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
      url: "/photographers",
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

  const handleButtonClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="module2">
      <div>
        <button onClick={handleButtonClick}>Click Me!</button>
      </div>
      {toggle && (
        <div>
          <Add list={photographersList} onAdd={handleAdd} />
          <Delete onDelete={handleDelete} />
          <Modify onModify={handleModify} />
          <hr></hr>
          <div>
            <PhotographersFeed list={photographersList} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
