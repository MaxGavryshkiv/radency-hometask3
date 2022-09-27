(function () {
  const getAllArchiveNotes = require("./getAllArchiveNotes.ts");
  const getNotes = require("./getNotes.ts");
  const addNote = require("./addNote.ts");
  const archiveNote = require("./archiveNote.ts");
  const getNoteById = require("./getNoteById.ts");
  const getNotesSummary = require("./getNotesSummary.ts");
  const removeArchiveNote = require("./removeArchiveNote.ts");
  const removeNote = require("./removeNote.ts");
  const unarchiveNote = require("./unarchiveNote.ts");
  const updateNote = require("./updateNote.ts");

  module.exports = {
    getAllArchiveNotes,
    getNotes,
    addNote,
    archiveNote,
    getNoteById,
    getNotesSummary,
    removeArchiveNote,
    removeNote,
    unarchiveNote,
    updateNote,
  };
})();
