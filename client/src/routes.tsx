import { createBrowserRouter } from "react-router";
import { Home } from "./pages/homeKanary/home";
import { Login } from "./pages/access/Login";

export const router = createBrowserRouter([
    {
        path: "Kanary/",
        Component: Home,
    },
    {
        path: "/login",
        Component: Login,
    },
    
])