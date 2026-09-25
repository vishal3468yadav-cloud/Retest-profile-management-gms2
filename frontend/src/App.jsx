import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddProfile from "../pages/AddProfile.jsx";
import ViewProfile from "../pages/ViewProfile.jsx";
import EditProfile from "../pages/EditProfile.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-profile" element={<AddProfile />} />
                <Route path="/view-profile/:id" element={<ViewProfile />} />
                <Route path="/edit-profile/:id" element={<EditProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;