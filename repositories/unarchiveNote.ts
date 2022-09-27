(function () {
  const fs = require("fs/promises");
  const path = require("path");
  const getNotes = require("./index.ts");
  const getAllArchiveNotes = require("./index.ts");

  const unarchiveNote = async (noteId) => {
    const notes = await getNotes();
    const archiveNotes = await getAllArchiveNotes();

    const [noteById] = archiveNotes.filter((note) => note.id === noteId);
    const index = archiveNotes.findIndex((note) => note.id === noteId);

    if (index !== -1) {
      archiveNotes.splice(index, 1);
      await fs.writeFile(
        path.join(__dirname, "../json/archiveNotes.json"),
        JSON.stringify(archiveNotes)
      );

      notes.push(noteById);
      await fs.writeFile(
        path.join(__dirname, "../json/notes.json"),
        JSON.stringify(notes)
      );
    }

    return noteById;
  };

  module.exports = unarchiveNote;
})();
