import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProfile from "./pages/AddProfile";
import ViewProfile from "./pages/ViewProfile";
import EditProfile from "./pages/EditProfile";

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