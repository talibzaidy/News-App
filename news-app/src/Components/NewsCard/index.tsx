import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { INewsCardProps } from "./NewsCard.interface";
import Thumbnail from "../Thumbnail";
import { useTranslation } from "react-i18next";
import { locale } from "../../Constants/Locale";

const NewsCard = (newsDetails: INewsCardProps) => {
  const { title, description, urlToImage, url } = newsDetails;
  const { t } = useTranslation();

  const handleNewsUrlLink = () => {
    window.open(url);
  };

  return (
    <Grid width={400}>
      <Card variant="outlined">
        <Thumbnail src={urlToImage} />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>

        <CardActions>
          <Tooltip title={url}>
            <Button size="small" onClick={handleNewsUrlLink}>
              {t(locale.LEARN_MORE)}
            </Button>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsCard;
