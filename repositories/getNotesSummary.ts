(function () {
  const getNotes = require("./index.ts");
  const getAllArchiveNotes = require("./index.ts");
  const getNoteSummary = async () => {
    const notes = await getNotes();
    const archiveNotes = await getAllArchiveNotes();

    const noteSummary = require("../services/noteSummary.ts")(
      notes,
      archiveNotes
    );
    return noteSummary;
  };

  module.exports = getNoteSummary;
})();
