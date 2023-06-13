import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/context.js";
import { useCookies } from "react-cookie";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sidebar from "./features/Navigation/Sidebar";
import Footer from "./features/Navigation/Footer";
import Navbar from "./features/Navigation/Navbar";
import { useGetUser } from "./hooks/useGetUser.js";
import Create from "./pages/Create.jsx";
import Friends from "./pages/Friends.jsx";
import Search from "./pages/Search.jsx";
import AlertComp from "./components/Alert/AlertComp.jsx";
import { AlertProvider } from "./context/AlertContext.jsx";


const App = () => {
  //  Get credentials
  const [cookies, _] = useCookies(["access_token"]);
  const { user, loading, getUserState } = useGetUser();

  return (
    <>
      <AuthContext.Provider value={{ token: cookies.access_token, user, loading, getUserState }}>
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
      </AuthContext.Provider>
    </>
  )
}

export default App
