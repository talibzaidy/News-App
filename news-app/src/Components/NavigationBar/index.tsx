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
import { useTranslation } from "react-i18next";

const NavigationBar = (props: any) => {
  const {
    setChipFilter,
    selectedLanguage,
    setSelectedLanguage,
    isDarkMode,
    setIsDarkMode,
  } = props;

  const { t, i18n } = useTranslation();
  const handleClick = (chip: string) => {
    setChipFilter(chip);
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectedLanguage(value);
    i18n.changeLanguage(value);
    document.body.dir = i18n.dir();
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
              label={t(`${value}`)}
              onClick={() => handleClick(value)}
            ></Chip>
          ))}

          <div>
            <InputLabel>{t("language")}</InputLabel>
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
