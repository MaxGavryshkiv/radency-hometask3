(function () {
  const getNotes = require("./index.ts");

  const getNoteById = async (noteId) => {
    const notes = await getNotes();
    const [noteById] = notes.filter((note) => note.id === noteId);
    return noteById;
  };

  module.exports = getNoteById;
})();
