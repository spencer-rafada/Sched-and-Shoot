import { React, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Photographer from "../PhotographerBio/Photographer";
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
    <div className="photographer-card">
      <Grid
        container
        rowSpacing={2}
        alignItems="flex-start"
        justifyContent="space-evenly"
      >
        {photographersList.map((item, key) => (
          <Grid item xs={2} sm={4} md={4} key={key}>
            <Photographer
              first_name={item.first_name}
              last_name={item.last_name}
              city={item.city}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PhotographersPage;
