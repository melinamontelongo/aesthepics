import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AlertProvider } from "./context/AlertContext.jsx";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sidebar from "./features/Navigation/Sidebar";
import Footer from "./features/Navigation/Footer";
import Navbar from "./features/Navigation/Navbar";
import Create from "./pages/Create.jsx";
import Friends from "./pages/Friends.jsx";
import Search from "./pages/Search.jsx";
import AlertComp from "./components/Alert/AlertComp.jsx";
import { ColorProvider } from "./context/ColorContext";

const App = () => {

  return (
    <>
      <AuthProvider>
        <ColorProvider>
          <AlertProvider>
            <AlertComp />
            <Router>
              <Sidebar />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:userID" element={<Profile />} />
                <Route path="/create" element={<Create />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/search" element={<Search />} />
              </Routes>
              <Footer />
            </Router>
          </AlertProvider >
        </ColorProvider>
      </AuthProvider>
    </>
  )
}

export default App
