import SoundFontPlayer from "soundfont-player";
import Audiocontext from './Audiocontext';

const NullSoundFontPlayerNoteAudio = {
    stop() {}
}

const NullSoundFontPlayer = {
    play() {
        return NullSoundFontPlayerNoteAudio;
    }
}

const Audioplayer = () => {

    const audiocontext = Audiocontext && new Audiocontext();

    let soundPlayer = NullSoundFontPlayer;
    //setInstrument
    const Player = {
        setInstrument(instrumentName) {
            SoundFontPlayer.instrument(audiocontext, instrumentName)
                .then(soundfontPlayer => {
                soundPlayer = soundfontPlayer;
                })
                .catch(e => {
                soundPlayer = NullSoundFontPlayer;
                });
        },
        playNote(note) {
            soundPlayer.play(note);
        }
    };
    return Player;
};

export default Audioplayer;
