import React, { useState, useEffect } from "react";
import NavigationBar from "../../Components/NavigationBar";
import { Grid, Stack } from "@mui/material";
import { ChipFilterEnum, ChipFilterType } from "./types";
import News from "../../Services/NewsService/News";
import { formattedDateDuration } from "../../Helper/Date";
import { LanguageEnum } from "../../Constants/Locale";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const Home = () => {
  const [chipFilter, setChipFilter] = useState<ChipFilterType>(
    ChipFilterEnum.APPLE
  );
  const [selectedLanguage, setSelectedLanguage] = useState(
    LanguageEnum.ENGLISH.value
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  const customTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });
  useEffect(() => {
    const { from, to } = formattedDateDuration();
    News.Everything({
      q: chipFilter,
      from: from,
      to: to,
      language: selectedLanguage,
    }).then((res) => console.log(res));
  }, [chipFilter, selectedLanguage]);

  return (
    <ThemeProvider theme={customTheme}>
      <Grid>
        <Stack direction={"column"} spacing={15}>
          <NavigationBar
            setChipFilter={setChipFilter}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </Stack>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
