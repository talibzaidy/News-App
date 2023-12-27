import React from "react";
import { CardMedia, Skeleton, Typography } from "@mui/material";
import { IThumbnailProps } from "./Thumbnail.interface";
import fallbackImage from "../../Assets/fallback.jpg";

const Thumbnail = (props: IThumbnailProps) => {
  const { src: imageSource } = props;
  return (
    <>
      <CardMedia
        component="img"
        image={imageSource ? imageSource : fallbackImage}
        alt={fallbackImage}
        height={150}
      />
    </>
  );
};

export default Thumbnail;
