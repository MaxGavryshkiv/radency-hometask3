export {};
const getAllNotes = require("./getAllNotes");
const getAllArchiveNotes = require("./getAllArchiveNotes");
const getNoteSummary = async () => {
  const notes = await getAllNotes();
  const archiveNotes = await getAllArchiveNotes();

  const noteSummary = require("../services/noteSummary.ts")(
    notes,
    archiveNotes
  );
  return noteSummary;
};

module.exports = getNoteSummary;
