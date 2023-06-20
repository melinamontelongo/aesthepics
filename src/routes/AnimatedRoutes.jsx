import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:userID" element={<Profile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    )
}