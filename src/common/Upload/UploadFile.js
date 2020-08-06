import React from "react";
const UploadFile = (props) => {
  const { handleFileChange } = props;
  return (
    <>
      <input type="file" onChange={handleFileChange} accept=".csv" />
    </>
  );
};
export default UploadFile;
