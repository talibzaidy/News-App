import { NewspaperOutlined } from "@mui/icons-material";
import {
  AppBar,
  Chip,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import News from "../../Services/NewsService/News";
import { ChipFilterEnum } from "../../Pages/Home/types";
import { LanguageEnum } from "../../Constants/Locale";

const newsBy: string[] = ["tesla", "apple", "meta", "google"];

const NavigationBar = (props: any) => {
  const {
    setChipFilter,
    selectedLanguage,
    setSelectedLanguage,
    isDarkMode,
    setIsDarkMode,
  } = props;

  const handleClick = (chip: string) => {
    setChipFilter(chip);
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectedLanguage(value);
    value === LanguageEnum.ENGLISH.value
      ? (document.dir = "ltr")
      : (document.dir = "rtl");
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode: boolean) => !prevMode);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <NewspaperOutlined></NewspaperOutlined>
          <Typography>News App</Typography>

          {Object.entries(ChipFilterEnum).map(([key, value]) => (
            <Chip
              key={key}
              label={value}
              onClick={() => handleClick(value)}
            ></Chip>
          ))}

          <div>
            <InputLabel>Language</InputLabel>
            <Select onChange={handleLanguageChange} value={selectedLanguage}>
              <MenuItem value={LanguageEnum.ENGLISH.value}>
                {LanguageEnum.ENGLISH.label}
              </MenuItem>
              <MenuItem value={LanguageEnum.ARABIC.value}>
                {LanguageEnum.ARABIC.label}
              </MenuItem>
            </Select>
          </div>

          <div>
            <Switch checked={isDarkMode} onChange={toggleDarkMode} />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
