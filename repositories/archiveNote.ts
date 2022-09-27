(function () {
  const fs = require("fs/promises");
  const path = require("path");
  const getNotes = require("./index.ts");
  const getAllArchiveNotes = require("./index.ts");

  const archiveNote = async (noteId) => {
    const notes = await getNotes();
    const archiveNotes = await getAllArchiveNotes();
    const [noteById] = notes.filter((note) => note.id === noteId);
    const index = notes.findIndex((note) => note.id === noteId);

    if (index !== -1) {
      notes.splice(index, 1);
      await fs.writeFile(
        path.join(__dirname, "../json/notes.json"),
        JSON.stringify(notes)
      );
      archiveNotes.push(noteById);
      await fs.writeFile(
        path.join(__dirname, "../json/archiveNotes.json"),
        JSON.stringify(archiveNotes)
      );
    }

    return noteById;
  };

  module.exports = archiveNote;
})();
