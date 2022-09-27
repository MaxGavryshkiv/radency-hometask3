export {};
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
const getAllArchiveNotes = require("./getAllArchiveNotes");

const archiveNote = async (noteId: string) => {
  const notes = await getAllNotes();
  const archiveNotes = await getAllArchiveNotes();
  const [noteById] = notes.filter((note: notesType) => note.id === noteId);
  const index = notes.findIndex((note: notesType) => note.id === noteId);

  if (index !== -1) {
    notes.splice(index, 1);
    await fs.writeFile(
      path.join(__dirname, "../json/notes.json"),
      JSON.stringify(notes)
    );
    archiveNotes.push(noteById);
    await fs.writeFile(
      path.join(__dirname, "../json/archiveNotes.json"),
      JSON.stringify(archiveNotes)
    );
  }

  return noteById;
};

module.exports = archiveNote;
