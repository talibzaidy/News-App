import React from "react";
import { IErrorProps } from "./Error.interface";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const ErrorComponent = (props: IErrorProps) => {
  const { message } = props;
  return (
    <Grid container justifyContent="center">
      <Card variant="outlined">
        <CardContent>
          <Typography color="error" variant="h5" gutterBottom>
            Error:
          </Typography>
          <Typography color="error" variant="body1">
            {message}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ErrorComponent;
