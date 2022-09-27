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

const unarchiveNote = async (noteId: string) => {
  const notes = await getAllNotes();
  const archiveNotes = await getAllArchiveNotes();

  const [noteById] = archiveNotes.filter(
    (note: notesType) => note.id === noteId
  );
  const index = archiveNotes.findIndex((note: notesType) => note.id === noteId);

  if (index !== -1) {
    archiveNotes.splice(index, 1);
    await fs.writeFile(
      path.join(__dirname, "../json/archiveNotes.json"),
      JSON.stringify(archiveNotes)
    );

    notes.push(noteById);
    await fs.writeFile(
      path.join(__dirname, "../json/notes.json"),
      JSON.stringify(notes)
    );
  }

  return noteById;
};

module.exports = unarchiveNote;
