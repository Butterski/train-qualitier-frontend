import "./App.css";
// import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { MainMenu } from "./Views/MainMenu/MainMenu";
import { MeasurementsList } from "./Views/MeasurementsList/MeasurementsList";
import { MeasurementView } from "./Views/MeasurementView/MeasurementView";
import { MeasurementData } from "./Views/MeasurementData/MeasurementData";

function App() {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route
          path="/show-measurements"
          element={<MeasurementsList />}
        />
        <Route
          path="/measurement-view/:optional_measurement_id?"
          element={<MeasurementView />}
        />
        <Route
          path="/measurement-data/:measurement_id"
          element={<MeasurementData />}
        />
      </Routes>
    </div>
  );
}

export default App;
