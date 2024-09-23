import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Routing from "./routes/Routing";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routing />
      <Footer />
    </Router>
  );
};

export default App;
