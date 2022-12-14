import { React } from "react";
import { Grid } from "@mui/material";
import Photographer from "../PhotographerBio/Photographer";

function PhotographersFeed(props) {
  return (
    <div className="photographer-card">
      <Grid
        container
        rowSpacing={2}
        alignItems="flex-start"
        justifyContent="space-evenly"
      >
        {props.list.map((item, key) => (
          <Grid item xs={2} sm={4} md={4} key={key}>
            <Photographer
              first_name={item.first_name}
              last_name={item.last_name}
              city={item.city}
              img={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PhotographersFeed;
