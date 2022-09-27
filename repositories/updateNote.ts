(function () {
  const fs = require("fs/promises");
  const path = require("path");
  const getNotes = require("./index.ts");

  const updateNote = async (noteId, body) => {
    const notes = await getNotes();
    const [updatableNote] = notes.filter((note) => note.id === noteId);
    if (updatableNote) {
      const createDate = require("../helpers/getDate")();
      const dateValidation = require("../services/dateValidation")(
        body.content
      );
      Object.assign(updatableNote, {
        created: createDate,
        dates: dateValidation,
        ...body,
      });
      await fs.writeFile(
        path.join(__dirname, "../json/notes.json"),
        JSON.stringify(notes)
      );
    }
    return updatableNote;
  };

  module.exports = updateNote;
})();
