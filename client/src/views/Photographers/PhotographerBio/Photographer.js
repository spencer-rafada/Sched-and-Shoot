// Copied from https://mui.com/material-ui/react-card/
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Photographer(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.first_name} {props.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.city}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Portfolio</Button>
        <Button size="small">Book me!</Button>
      </CardActions>
    </Card>
  );
}
