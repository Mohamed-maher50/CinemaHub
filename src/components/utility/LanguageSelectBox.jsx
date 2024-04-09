import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "../SelectBox/SelectBox";
import { updateLang } from "../../reducers/settings/SettingsReducer";
import { getLanguagesThunk } from "../../reducers/settings/SettingsThunk";
import { getGenresThunk } from "../../reducers/genres/genresThunk";
import { useSearchParams } from "react-router-dom";

const LanguageSelectBox = () => {
  const { languages } = useSelector((state) => state.SettingsReducer);
  const [searchparams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const handleOnChange = (val) => {
    dispatch(updateLang(val.iso_639_1));

    setSearchParams((prev) => {
      prev.set("language", val.iso_639_1);
      return prev;
    });
  };
  useEffect(() => {
    dispatch(getLanguagesThunk());
  }, []);
  return (
    <SelectBox
      options={languages}
      getOptionValue={(obj) => obj.iso_639_1}
      className="w-full h-fit min-w-36"
      onChange={handleOnChange}
      getOptionLabel={(obj) => <span>{obj.name || obj.english_name}</span>}
    />
  );
};

export default LanguageSelectBox;
