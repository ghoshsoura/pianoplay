import { notes } from "../Contexts/notes";

export default function accidentalnote(note) {
    return notes.includes(note) && note.includes('#')
}