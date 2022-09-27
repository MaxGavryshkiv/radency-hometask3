export {};
const getAllArchiveNotes = require("./getAllArchiveNotes");
const getAllNotes = require("./getAllNotes");
const addNote = require("./addNote");
const archiveNote = require("./archiveNote");
const getNoteById = require("./getNoteById");
const getNotesSummary = require("./getNotesSummary");
const removeArchiveNote = require("./removeArchiveNote");
const removeNote = require("./removeNote");
const unarchiveNote = require("./unarchiveNote");
const updateNote = require("./updateNote");

module.exports = {
  getAllArchiveNotes,
  getAllNotes,
  addNote,
  archiveNote,
  getNoteById,
  getNotesSummary,
  removeArchiveNote,
  removeNote,
  unarchiveNote,
  updateNote,
};
