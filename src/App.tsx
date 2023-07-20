import "./App.css";
import { BuyBlock } from "./componets/buyBlock/BuyBlock";
import { DescriptionNightCity } from "./componets/descriptionNightCity/DescriptionNightCity";
import { Footer } from "./componets/footer/Footer";
import { Hp } from "./componets/hp/Hp";
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
      <IntermediatePicture color="yellow" />
      <Hp />
      <BuyBlock />
      <Footer />
    </div>
  );
}

export default App;
