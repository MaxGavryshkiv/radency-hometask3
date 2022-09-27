(function () {
  const fs = require("fs/promises");
  const path = require("path");

  const getAllArchiveNotes = require("./index.ts");

  const removeArchiveNote = async (noteId) => {
    const notes = await getAllArchiveNotes();
    const index = notes.findIndex((note) => note.id === noteId);
    if (index !== -1) {
      const removeNote = notes.splice(index, 1);
      await fs.writeFile(
        path.join(__dirname, "../json/archiveNotes.json"),
        JSON.stringify(notes)
      );
      return removeNote;
    }
    return null;
  };

  module.exports = removeArchiveNote;
})();
