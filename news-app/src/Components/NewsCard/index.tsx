import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { INewsCardProps } from "./NewsCard.Interface";
import Thumbnail from "../Thumbnail";

const NewsCard = (newsDetails: INewsCardProps) => {
  const { title, author, description, urlToImage, content, url } = newsDetails;

  const handleNewsUrlLink = () => {
    window.open(url);
  };

  return (
    <Grid width={400}>
      <Card>
        <Thumbnail src={urlToImage} />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={handleNewsUrlLink}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsCard;
