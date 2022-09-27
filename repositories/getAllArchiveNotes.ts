(function () {
  const fs = require("fs/promises");
  const path = require("path");

  const getAllArchiveNotes = async () => {
    const data = await fs.readFile(
      path.join(__dirname, "../json/archiveNotes.json"),
      "utf8"
    );
    return JSON.parse(data);
  };

  module.exports = getAllArchiveNotes;
})();
