type notesType = {
  id: string;
  created: string;
  dates: string;
  noteName: string;
  category: string;
  content: string;
};

import fs from "fs/promises";
import path from "path";
import getAllNotes from "./getAllNotes";
import getDate from "../helpers/getDate";
import dateValidation from "../services/dateValidation";

const updateNote = async (
  noteId: string,
  body: {
    noteName: string;
    category: string;
    content: string;
  }
) => {
  const notes = await getAllNotes();
  const [updatableNote] = notes.filter((note: notesType) => note.id === noteId);
  if (updatableNote) {
    const createDate: string = getDate();
    const validatedDate: string = dateValidation(body.content);
    Object.assign(updatableNote, {
      created: createDate,
      dates: validatedDate,
      ...body,
    });
    await fs.writeFile(
      path.join(__dirname, "../json/notes.json"),
      JSON.stringify(notes)
    );
  }
  return updatableNote;
};

export default updateNote;
