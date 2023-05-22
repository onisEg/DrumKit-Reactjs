import "./App.css";
import Btns from "./components/Btns";
import DrumContextProvider from "./context/DrumContext";

function App() {
  return (
    <div className="bg">
      <DrumContextProvider>
        <Btns />
      </DrumContextProvider>
    </div>
  );
}

export default App;
