import { ChipFilterType } from "../../Pages/Home/types";

export interface INavBarProps {
  setChipFilter: (value: ChipFilterType) => void;
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}
