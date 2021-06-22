import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,CardContent,CardMedia,Typography} from '@material-ui/core';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MovieCard({movie}) {
  const classes = useStyles();
  const {title, img, rate, desc,id} = movie;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
          className="card-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
          <StarRatingComponent name="rate" starCount={5} value={rate} className="star-rating"/>
        </CardContent>
      </CardActionArea>
      <Link to={`/${id}`} className="seemore"> <button  >Watch the trailer</button> </Link>

    </Card>
  );
}

