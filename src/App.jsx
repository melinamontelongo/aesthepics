import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AlertProvider } from "./context/AlertContext.jsx";
import { ColorProvider } from "./context/ColorContext";
import { LocationProvider } from "./routes/LocationProvider";
import { AnimatedRoutes } from "./routes/AnimatedRoutes";

import Sidebar from "./features/Navigation/Sidebar";
import Footer from "./features/Navigation/Footer";
import Navbar from "./features/Navigation/Navbar";
import AlertComp from "./components/Alert/AlertComp.jsx";

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
              <LocationProvider>
                <AnimatedRoutes />
              </LocationProvider>
              <Footer />
            </Router>
          </AlertProvider >
        </ColorProvider>
      </AuthProvider>
    </>
  )
}

export default App
