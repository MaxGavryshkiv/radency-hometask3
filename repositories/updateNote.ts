(function () {
  type notesType = {
    id: string;
    created: string;
    dates: string;
    noteName: string;
    category: string;
    content: string;
  };

  const fs = require("fs/promises");
  const path = require("path");
  const getAllNotes = require("./getAllNotes");

  const updateNote = async (
    noteId: string,
    body: {
      noteName: string;
      category: string;
      content: string;
    }
  ) => {
    const notes = await getAllNotes();
    const [updatableNote] = notes.filter(
      (note: notesType) => note.id === noteId
    );
    if (updatableNote) {
      const createDate: string = require("../helpers/getDate")();
      const dateValidation: string = require("../services/dateValidation")(
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
