import React from 'react'
import { useDrumkit } from '../context/DrumContext';

export default function Key({ letter, dataKey, sound }) {

  return (
    <div className="key " data-key={dataKey}>
          <h1>{letter} </h1>
      <span>{sound}</span>
      <audio data-key={dataKey} src={`../../public/sounds/${sound}.wav`}></audio>
    </div>
  );
}
