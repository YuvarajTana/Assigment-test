import React from "react";
import "./DropDownButton.css";
import Loader from "../Loader/Loader";

const DropDownButton = (props) => {
  const { handleAction, handleFileChange, selectedAirport, airportData, isFileUploadFlag } = props;

  console.log("selectedAirport", selectedAirport);

  return (
    <div className="dropdown">
      <label className="dd-button" htmlFor={airportData.length === 0 ? "fileUpload" : ""}>
        {selectedAirport ? selectedAirport : "Airport Chooser"}
      </label>
      <input type="file" id="fileUpload" onChange={handleFileChange} accept=".csv" />
      <input type="checkbox" className="dd-input" />
      <ul className="dd-list">
        {airportData.length === 0 && isFileUploadFlag ? (
          <li>
            <Loader />
          </li>
        ) : (
          ""
        )}
        {airportData &&
          airportData.map(({ namelong, city, country, iata }, index) => (
            <li key={index} onClick={() => handleAction(index)}>{`${namelong}, ${city}, ${country}`}</li>
          ))}
      </ul>
    </div>
  );
};

export default DropDownButton;
