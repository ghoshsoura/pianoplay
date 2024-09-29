import React, {useEffect, useState} from "react";
import Audioplayer from "./Audioplayer";

const Instrumentaudio = ({instrumentName, notes}) => {
    const [instrumentPlayer, setInstrumentPlayer] = useState(null);
    useEffect(() => {
        setInstrumentPlayer(Audioplayer());
    }, []);

    useEffect(() => {
        if (instrumentPlayer) {
        setInstrument();
        playNotes();
        }
    }, [instrumentPlayer]);

    useEffect(() => {
        if (notes && notes.length > 0) {
        playNotes();
        }
    }, [notes]);

    const setInstrument = () => {
        instrumentPlayer.setInstrument(instrumentName);
    };

    const playNotes = () => {
        if (instrumentPlayer) {
        instrumentPlayer.playNote(notes[0]);
        }
    };

    return null;
}

export default Instrumentaudio;