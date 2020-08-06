export default {
  csvJSON: (textData) => {
    const lines = textData.split("\r");
    const headers = lines[0].split(",");
    const result = lines.map((line) => {
      const obj = {};
      const currentLine = line.split(",");
      currentLine.map((currentField, index) => {
        obj[headers[index]] = currentField;
      });
      return obj;
    });
    console.log("result", result);
    return result;
  },
};
