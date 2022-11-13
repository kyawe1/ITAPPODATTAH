import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function MainLayout() {
    return (
        <Box className="flex">
            <div className="w-1/6">
                <Sidebar></Sidebar>
            </div>
            <div className="w-full">
                <Header></Header>
                <Outlet />
            </div>
        </Box>
    );
}