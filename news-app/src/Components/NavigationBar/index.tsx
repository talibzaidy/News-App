import { NewspaperOutlined } from "@mui/icons-material";
import {
  AppBar,
  Chip,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { ChipFilterEnum, ChipFilterType } from "../../Pages/Home/types";
import { languageConfig, locale } from "../../Constants/Locale";
import { useTranslation } from "react-i18next";
import { INavBarProps } from "./NavigationBar.interface";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./styles.css";

const NavigationBar = (props: INavBarProps) => {
  const {
    setChipFilter,
    selectedLanguage,
    setSelectedLanguage,
    isDarkMode,
    setIsDarkMode,
  } = props;

  const { t, i18n } = useTranslation();

  const handleClick = (chip: ChipFilterType) => {
    setChipFilter(chip);
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectedLanguage(value);
    i18n.changeLanguage(value);
    document.body.dir = i18n.dir();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <AppBar>
        <Toolbar className="navbar">
          <Container>
            <Grid container spacing={2}>
              <Grid item md={3} className="app-name">
                <NewspaperOutlined></NewspaperOutlined>
                <Typography>{t(locale.NEWS_APP)}</Typography>
              </Grid>

              <Grid item className="query-chips" md>
                {Object.entries(ChipFilterEnum).map(([key, value]) => (
                  <Chip
                    variant="outlined"
                    key={key}
                    label={t(`${value}`)}
                    onClick={() => handleClick(value)}
                  ></Chip>
                ))}
              </Grid>

              <Grid item md={3}>
                <Select
                  onChange={handleLanguageChange}
                  value={selectedLanguage}
                >
                  <MenuItem value={languageConfig.ENGLISH.value}>
                    {t(languageConfig.ENGLISH.label)}
                  </MenuItem>
                  <MenuItem value={languageConfig.ARABIC.value}>
                    {t(languageConfig.ARABIC.label)}
                  </MenuItem>
                </Select>

                <IconButton
                  sx={{ ml: 1 }}
                  onClick={toggleDarkMode}
                  color="inherit"
                >
                  {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
