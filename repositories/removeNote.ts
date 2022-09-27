(function () {
  const fs = require("fs/promises");
  const path = require("path");
  const getNotes = require("./index.ts");

  const removeNote = async (noteId) => {
    const notes = await getNotes();
    const index = notes.findIndex((note) => note.id === noteId);
    if (index !== -1) {
      const removeNote = notes.splice(index, 1);
      await fs.writeFile(
        path.join(__dirname, "../json/notes.json"),
        JSON.stringify(notes)
      );
      return removeNote;
    }
    return null;
  };
  module.exports = removeNote;
})();
