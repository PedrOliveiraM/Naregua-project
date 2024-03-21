import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import login from "./components/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/login" exact Component={login} />
      </Routes>
    </Router>
  );
};

export default App;
