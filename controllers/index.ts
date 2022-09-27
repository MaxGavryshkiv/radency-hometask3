(function () {
  const addNote = require("./CTRLaddNote");
  const archiveNote = require("./CTRLarchiveNote");
  const getAllArchiveNotes = require("./CTRLgetAllArchiveNotes");
  const getAllNotes = require("./CTRLgetAllNotes");
  const getNoteById = require("./CTRLgetNoteById");
  const getNotesSummary = require("./CTRLgetNotesSummary");
  const removeArchiveNote = require("./CTRLremoveArchiveNote");
  const removeNote = require("./CTRLremoveNote");
  const unarchiveNote = require("./CTRLunarchiveNote");
  const updateNote = require("./CTRLupdateNote");

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
