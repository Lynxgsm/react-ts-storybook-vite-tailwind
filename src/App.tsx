import { FC } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/Home";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
