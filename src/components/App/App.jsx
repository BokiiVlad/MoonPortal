import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
