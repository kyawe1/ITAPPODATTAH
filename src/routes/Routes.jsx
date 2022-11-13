import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../Views/Register";
import Login from "../Views/Login";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Views/Home";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="" element={<MainLayout></MainLayout>}>
                    <Route path="home" element={<Home></Home>} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}