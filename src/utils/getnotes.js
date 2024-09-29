import { notes } from "../Contexts/notes";

export default function getnotes(startNote, endNote) {
    const startingIndex = notes.indexOf(startNote);
    const endingIndex = notes.indexOf(endNote);
    return notes.slice(startingIndex, endingIndex + 1);
  }