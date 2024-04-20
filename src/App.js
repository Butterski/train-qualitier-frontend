import "./App.css";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { MainMenu } from "./Views/MainMenu/MainMenu";
import { GraphView } from "./Views/GraphView/GraphView";
import { MeasurementsList } from "./Views/MeasurementsList/MeasurementsList";

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const buttonName = searchParams.get("button");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route 
          path="/graph" 
          element={<GraphView buttonName={buttonName} />} 
          />
        <Route
          path="/show-measurements"
          element={<MeasurementsList buttonName={buttonName} />}
        />
      </Routes>
    </div>
  );
}

export default App;
