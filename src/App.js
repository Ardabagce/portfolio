import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import NavigationBar from "./Components/Navbar";
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Blog from "./Pages/Blog";
import "@fortawesome/react-fontawesome"

import Dashboard from "./views/admin/Dashboard.js";
import Settings from "./views/admin/Settings.js";
import Tables from "./views/admin/Tables.js";

import Admin from "./layouts/Admin";
 import FooterSmall from "./Components/Dashboard/Footers/FooterSmall"
import BlogPost from "./Pages/BlogPost";


function App() {
      return (
      <>
      <NavigationBar/>
      <Routes>

        {/*Public routes */}
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/"/>} />
        <Route path="/Login" element ={<Login/>}/>
        <Route path="/SignUp" element ={<SignUp/>}/>
        <Route path="/Blog" element ={<Blog/>}/>

        {/*Private routes */}
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/settings" element={<Settings/>} />
        <Route path="/admin/tables" element={<Tables/>} />
        <Route path="/admin/blogpost" element={<BlogPost/>}/>
        </Routes>
        <FooterSmall/>
        </>
  );
}

export default App;
