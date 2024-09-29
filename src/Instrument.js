import React, {Fragment, useState, useEffect} from "react";
import Instrumentaudio from "./Keboards/Instrumentaudio";
import getnotes from "./utils/getnotes";
import accidentalnote from "./utils/accidentalnote"
import { Notesshortcut } from "./utils/Notesshortcut";

const isRegularKey = event => {
    return !event.ctrlKey && !event.metaKey && !event.shiftKey;
  };
  
const Instrument = ({ 
    instrumentName, 
    startNote, 
    endNote,
    renderPianoKey,
    keyboardMap 
    }) => {
    const notes = getnotes(startNote, endNote);

    const [state, setState] = useState({
        notesPlaying: []
    });

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
      }, []);
    
      const getNoteFromKeyboardKey = keyboardKey => {
        return keyboardMap[keyboardKey.toUpperCase()];
      };
    
      const handleKeyDown = e => {
        if (isRegularKey(e) && !e.repeat) {
          const note = getNoteFromKeyboardKey(e.key);
          if (note) {
            setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
          }
        }
      };
    
      const handleKeyUp = e => {
        if (isRegularKey(e) && !e.repeat) {
          const note = getNoteFromKeyboardKey(e.key);
          if (note) {
            setState({
              ...state,
              notesPlaying: state.notesPlaying.filter(
                notePlaying => notePlaying !== note
              )
            });
          }
        }
      };
    
    const onPlayNoteStart = note => {
        setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
    };
    
    const onPlayNoteEnd = note => {
        setState({
          ...state,
          notesPlaying: state.notesPlaying.filter(
            notePlaying => notePlaying !== note
          )
        });
    };


    return (
      <Fragment>
        {notes.map(note => {
          return(
            <Fragment key={note}>
                {renderPianoKey({
                note,
                isAccidentalNote: accidentalnote(note),
                isNotePlaying: state.notesPlaying.includes(note),
                startPlayingNote: () => onPlayNoteStart(note),
                stopPlayingNote: () => onPlayNoteEnd(note),
                keyboardShortcut: Notesshortcut(keyboardMap, note)
                })}
            </Fragment>
          );
        })} 
        <Instrumentaudio 
            instrumentName={instrumentName}
            notes={state.notesPlaying}
        />
      </Fragment>
    );
  };
  
  export default Instrument;