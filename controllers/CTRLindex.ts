(function () {
  const CTRLaddNote = require("./CTRLaddNote.ts");
  const CTRLarchiveNote = require("./CTRLarchiveNote.ts");
  const CTRLgetAllArchiveNotes = require("./CTRLgetAllArchiveNotes.ts");
  const CTRLgetAllNotes = require("./CTRLgetAllNotes.ts");
  const CTRLgetNoteById = require("./CTRLgetNoteById.ts");
  const CTRLgetNotesSummary = require("./CTRLgetNotesSummary.ts");
  const CTRLremoveArchiveNote = require("./CTRLremoveArchiveNote.ts");
  const CTRLremoveNote = require("./CTRLremoveNote.ts");
  const CTRLunarchiveNote = require("./CTRLunarchiveNote.ts");
  const CTRLupdateNote = require("./CTRLupdateNote.ts");

  module.exports = {
    CTRLaddNote,
    CTRLarchiveNote,
    CTRLgetAllArchiveNotes,
    CTRLgetAllNotes,
    CTRLgetNoteById,
    CTRLgetNotesSummary,
    CTRLremoveArchiveNote,
    CTRLremoveNote,
    CTRLunarchiveNote,
    CTRLupdateNote,
  };
})();
