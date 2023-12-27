import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import { Grid, Stack } from "@mui/material";

function App() {
  return (
    <Grid>
      <Stack direction={"column"} spacing={15}>
        <NavigationBar />
      </Stack>
    </Grid>
  );
}

export default App;
