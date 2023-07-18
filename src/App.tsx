import "./App.css";
import { DescriptionNightCity } from "./componets/descriptionNightCity/DescriptionNightCity";
import { PlayAndWin } from "./componets/playAndWin/PlayAndWin";
import { IntermediatePicture } from "./componets/ui/IntermediatePicture";
import { Header } from "./header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <DescriptionNightCity />
      <IntermediatePicture color="black" />
      <PlayAndWin />
    </div>
  );
}

export default App;
