import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "../SelectBox/SelectBox";
import { updateLang } from "../../reducers/settings/SettingsReducer";
import { getLanguagesThunk } from "../../reducers/settings/SettingsThunk";
import { getGenresThunk } from "../../reducers/genres/genresThunk";

const LanguageSelectBox = () => {
  const { languages } = useSelector((state) => state.SettingsReducer);

  const dispatch = useDispatch();
  const handleOnChange = (val) => {
    dispatch(updateLang(val.iso_639_1));
    dispatch(getGenresThunk(`?language=${val.iso_639_1}`));
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
