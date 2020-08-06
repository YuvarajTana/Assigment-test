import React, { useState, useEffect } from "react";
import DropDownButton from "../common/DropDownButton/DropDownButton";
import utils from "../utils";
const AirportChooser = () => {
  const [airportName, setAirportName] = useState("");
  const [airportData, setAirportData] = useState([]);
  const [isFileUploadFlag, setIsFileUploadFlag] = useState(false);
  useEffect(() => {}, [true]);

  const handleAction = (index) => {
    const { namelong, iata } = airportData[index];
    setAirportName(namelong);
  };

  const handleFileUpload = (event) => {
    if (event && event.target) {
      setIsFileUploadFlag(true);
      const reader = new FileReader();
      reader.readAsText(event.target.files[0]);
      reader.onload = (e) => {
        setAirportData(utils.csvJSON(e.target.result));
      };
    }
  };

  return (
    <DropDownButton
      handleAction={handleAction}
      selectedAirport={airportName}
      airportData={airportData}
      handleFileChange={handleFileUpload}
      isFileUploadFlag={isFileUploadFlag}
    />
  );
};

export default AirportChooser;
