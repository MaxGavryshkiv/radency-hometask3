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

import getAllArchiveNotes from "./getAllArchiveNotes";

const removeArchiveNote = async (noteId: string) => {
  const notes = await getAllArchiveNotes();
  const index = notes.findIndex((note: notesType) => note.id === noteId);
  if (index !== -1) {
    const removeNote = notes.splice(index, 1);
    await fs.writeFile(
      path.join(__dirname, "../json/archiveNotes.json"),
      JSON.stringify(notes)
    );
    return removeNote;
  }
  return null;
};

export default removeArchiveNote;
