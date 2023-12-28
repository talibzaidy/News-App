import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { INewsCardProps } from "./NewsCard.interface";
import Thumbnail from "../Thumbnail";
import { useTranslation } from "react-i18next";
import { locale } from "../../Constants/Locale";
import { truncateText } from "../../Helper/helper";

const NewsCard = (newsDetails: INewsCardProps) => {
  const { title, description, urlToImage, url } = newsDetails;
  const { t } = useTranslation();
  const maxLengthDescription = 150;
  const maxLengthTitle = 70;

  const truncatedDescription =
    description && truncateText(description, maxLengthDescription);
  const truncatedTitle = title && truncateText(title, maxLengthTitle);

  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <Thumbnail src={urlToImage} />
        <CardContent>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="h5">{truncatedTitle}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{truncatedDescription}</Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Tooltip title={url}>
            <Link href={url} rel="noopener noreferrer" target="_blank">
              {t(locale.LEARN_MORE)}
            </Link>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsCard;
