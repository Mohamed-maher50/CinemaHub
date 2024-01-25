import React from "react";
import Select from "react-select";

const darkStyles = {
  container: (provided) => ({
    ...provided,
    color: "#fff", // Text color in the control
    background: "#333", // Background color for the control
  }),
  input: (state) => {
    return {
      ...state,
      color: "white",
    };
  },
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "#555" : "#555", // Border color for the control
    boxShadow: state.isFocused ? "0 0 0 1px #555" : provided.boxShadow,
    "&:hover": {
      borderColor: "#555", // Border color on hover
    },
    background: "#121212",
    border: "0px solid transparent",
    // boxShadow: "none",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#151F2E", // Background color for the menu
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#000" : "#fff", // Text color for options
    background: state.isSelected ? "#fff" : "#151F2E", // Background color for selected options
    ":hover": {
      background: state.isSelected ? "#fff" : "#3030309e", // Background color on hover
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#ddd", // Change the color to your desired color
  }),
};

const SelectBox = ({ options, className, ...props }) => {
  return (
    <>
      <Select
        className={`basic-single  outline-none border-none ${
          className ? className : ""
        } `}
        classNamePrefix="select"
        defaultValue={options[0]}
        isSearchable={true}
        options={options}
        styles={darkStyles}
        {...props}
      />
    </>
  );
};

export default SelectBox;
