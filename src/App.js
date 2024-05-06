import "./App.scss";
import DataLayout from "./modules/dataLayout";
import GameLayout from "./modules/gameLayout";

const App = () => {
  return (
    <div className="App">
      <GameLayout />
      <DataLayout />
    </div>
  );
};

export default App;
