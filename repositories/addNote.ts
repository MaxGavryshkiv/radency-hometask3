(function () {
  const fs = require("fs/promises");
  const path = require("path");
  const { v4: uuid } = require("uuid");
  const getNotes = require("./index.ts");
  const getDate = require("../helpers/getDate.ts");
  const getDateFromContent = require("../services/dateValidation.ts");

  const addNote = async (body) => {
    const notes = await getNotes();
    const id = uuid();
    const createDate = getDate();
    const dateValidation = getDateFromContent(body.content);
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
