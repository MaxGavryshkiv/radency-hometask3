(function () {
  const fs = require("fs/promises");
  const path = require("path");

  const getNotes = async () => {
    const data = await fs.readFile(
      path.join(__dirname, "../json/notes.json"),
      "utf8"
    );
    return JSON.parse(data);
  };

  module.exports = getNotes;
})();