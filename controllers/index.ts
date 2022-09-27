const addNote = require("./addNote");
const archiveNote = require("./archiveNote");
const getAllArchiveNotes = require("./getAllArchiveNotes");
const getAllNotes = require("./getAllNotes");
const getNoteById = require("./getNoteById");
const getNotesSummary = require("./getNotesSummary");
const removeArchiveNote = require("./removeArchiveNote");
const removeNote = require("./removeNote");
const unarchiveNote = require("./unarchiveNote");
const updateNote = require("./updateNote");

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
