import { createContext,useContext } from "react";

const DrumkitContext = createContext(0);

export default function DrumContextProvider({ children }) {
    function keydown(e) {
        let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

        let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        key.classList.add('playing')
        setTimeout(() => {
            key.classList.remove('playing')
        }, 100);
    }
    document.addEventListener('keydown',keydown)
  return (
    <DrumkitContext.Provider value={{ keydown }}>
      {children}
    </DrumkitContext.Provider>
  );
}

export function useDrumkit() {
  return useContext(DrumkitContext);
}
