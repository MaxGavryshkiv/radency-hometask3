(function () {
  const fs = require("fs/promises");
  const path = require("path");
  const { v4: uuid } = require("uuid");
  const getAllNotes = require("./getAllNotes");

  const addNote = async (body: {
    noteName: string;
    category: string;
    content: string;
  }) => {
    const notes = await getAllNotes();
    const id = uuid();
    const createDate: string = require("../helpers/getDate")();
    const dateValidation: string = require("../services/dateValidation")(
      body.content
    );
    const newNote = {
      id,
      created: createDate,
      dates: dateValidation,
      ...body,
    };
    notes.push(newNote);
    await fs.writeFile(
      path.join(__dirname, "../json/notes.json"),
      JSON.stringify(notes)
    );
    return newNote;
  };

  module.exports = addNote;
})();
