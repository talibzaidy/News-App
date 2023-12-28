import React, { useState, useEffect } from "react";
import NavigationBar from "../../Components/NavigationBar";
import { Box, CircularProgress, Grid, Stack } from "@mui/material";
import { ChipFilterEnum, ChipFilterType } from "./types";
import News from "../../Services/NewsService/News";
import { formattedDateDuration } from "../../Helper/Date";
import { languageConfig } from "../../Constants/Locale";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NewsArticleType } from "../../Services/NewsService/types";
import NewsCard from "../../Components/NewsCard";
import ErrorComponent from "../../Components/Error";
import { PaletteMode } from "./enums";

const Home = () => {
  const [chipFilter, setChipFilter] = useState<ChipFilterType>(
    ChipFilterEnum.APPLE
  );
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageConfig.ENGLISH.value
  );
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [articleData, setArticlesData] = useState<NewsArticleType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const customTheme = createTheme({
    palette: {
      mode: isDarkMode ? PaletteMode.DARK : PaletteMode.LIGHT,
    },
  });
  useEffect(() => {
    const { from, to } = formattedDateDuration();
    setLoading(true);
    setArticlesData([]);
    News.Everything({
      q: chipFilter,
      from: from,
      to: to,
      language: selectedLanguage,
    })
      .then((res) => {
        setArticlesData(res.articles);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        setErrorMessage(err.message);
      });
  }, [chipFilter, selectedLanguage]);

  return (
    <ThemeProvider theme={customTheme}>
      <Grid>
        <Stack direction={"column"} spacing={15} sx={{ display: "flex" }}>
          <NavigationBar
            setChipFilter={setChipFilter}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            columnSpacing={3}
            rowSpacing={3}
          >
            {articleData && articleData.length > 0
              ? articleData.map((item, index) => {
                  return (
                    <NewsCard
                      key={index}
                      author={item.author}
                      content={item.content}
                      description={item.description}
                      title={item.title}
                      url={item.url}
                      urlToImage={item.urlToImage}
                    />
                  );
                })
              : loading && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
          </Grid>
          {isError && <ErrorComponent message={errorMessage} />}
        </Stack>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
