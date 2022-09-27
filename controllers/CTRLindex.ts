(function () {
  const addNote = require("./CTRLaddNote.ts");
  const archiveNote = require("./CTRLarchiveNote.ts");
  const getAllArchiveNotes = require("./CTRLgetAllArchiveNotes.ts");
  const getAllNotes = require("./CTRLgetAllNotes.ts");
  const getNoteById = require("./CTRLgetNoteById.ts");
  const getNotesSummary = require("./CTRLgetNotesSummary.ts");
  const removeArchiveNote = require("./CTRLremoveArchiveNote.ts");
  const removeNote = require("./CTRLremoveNote.ts");
  const unarchiveNote = require("./CTRLunarchiveNote.ts");
  const updateNote = require("./CTRLupdateNote.ts");

  module.exports = {
    addNote,
    archiveNote,
    getAllArchiveNotes,
    getAllNotes,
    getNoteById,
    getNotesSummary,
    removeArchiveNote,
    removeNote,
    unarchiveNote,
    updateNote,
  };
})();
