import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import NavigationBar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
    <div className="App">
      <ScrollToTop />
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/"/>} />
        <Route path="/Login" element ={<Login/>}/>
        <Route path="/SignUp" element ={<SignUp/>}/>
        <Route path="/Profile" element ={<Profile/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
