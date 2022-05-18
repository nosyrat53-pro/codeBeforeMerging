import React from "react";
import './index.css';
import AudioPlayer from 'react-h5-audio-player';
import mp3File from '../../assets/clock_sound.mp3';

const AudioPlayerScreen = (props) => {
    console.log('mp3 => ',mp3File);
    return <div className="audioplayerScreen">
                <AudioPlayer 
                autoPlay
                src={mp3File}
                onPlay={e => console.log("onPlay")}
                // other props here
              />
            </div>
}

export default AudioPlayerScreen;