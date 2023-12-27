import React from "react";
import { CardMedia, Skeleton } from "@mui/material";

const Thumbnail = (props: { src?: string }) => {
  return (
    <>
      {props.src ? (
        <CardMedia
          component="img"
          image={props.src}
          title="news"
          height="140"
        />
      ) : (
        <Skeleton variant="rectangular" height={150} animation="pulse" />
      )}
    </>
  );
};

export default Thumbnail;
