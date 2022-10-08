import { React, useState, useEffect } from "react";
import PhotographersFeed from "./PhotographersFeed/PhotographersFeed";
import axios from "axios";

function PhotographersPage() {
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
  return (
    <div>
      <PhotographersFeed list={photographersList} />
    </div>
  );
}

export default PhotographersPage;
