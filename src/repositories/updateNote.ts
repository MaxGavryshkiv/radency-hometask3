type notesType = {
  id: string;
  noteName: string;
  created: string;
  category: string;
  content: string;
  dates: string;
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
      id: noteId,
      noteName: body.noteName,
      created: createDate,
      category: body.category,
      content: body.content,
      dates: validatedDate,
    });
    await fs.writeFile(
      path.join(__dirname, "../json/notes.json"),
      JSON.stringify(notes)
    );
  }
  return updatableNote;
};

export default updateNote;
