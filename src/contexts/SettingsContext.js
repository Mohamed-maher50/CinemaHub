import { createContext, useState } from "react";
import useQuery from "../lib/SearchPrams";

const SettingContext = createContext();
export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    lang: "en",
  });
  const [q, setq] = useQuery();
  const changeLanguage = (lang) => {
    let d = setq("language", lang.iso_639_1);
    console.log(d);
    setSettings((prev) => {
      return {
        ...prev,
        lang,
      };
    });
  };
  return (
    <SettingContext.Provider value={{ settings, setSettings, changeLanguage }}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingContext;
