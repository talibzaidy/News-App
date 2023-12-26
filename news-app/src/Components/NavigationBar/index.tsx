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
import React, { useState } from "react";

const newsBy: string[] = ["tesla", "apple", "meta", "google"];
const NavigationBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = (chip: string) => {
    console.log(chip);
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setSelectedLanguage(event.target.value as string);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
      <AppBar>
        <Toolbar>
          <NewspaperOutlined></NewspaperOutlined>
          <Typography>News App</Typography>

          {newsBy &&
            newsBy.map((item, index) => {
              return (
                <Chip
                  key={index}
                  label={item}
                  onClick={() => handleClick(item)}
                ></Chip>
              );
            })}
          <div>
            <InputLabel>Language</InputLabel>
            <Select onChange={handleLanguageChange} value={selectedLanguage}>
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="arabic">Arabic</MenuItem>
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
