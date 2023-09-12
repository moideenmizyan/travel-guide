import "./App.css";
import Places from "./components/screens/Places";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Places />
      </Router>
    </div>
  );
};

export default App;
