import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
