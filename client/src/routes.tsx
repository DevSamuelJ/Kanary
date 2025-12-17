import { createBrowserRouter } from "react-router";
import { Home } from "./pages/homeKanary/home";
import { Login } from "./pages/access/Login";
import { RecoveryPass } from "./pages/access/RecoveryPass";
import { Register } from "./pages/access/Register";

export const router = createBrowserRouter([
    {
        path: "Kanary/",
        Component: Home,
    },    
    {
        path: "Kanary/login",
        Component: Login,
    },
    {
        path: "Kanary/recoverypass",
        Component: RecoveryPass,
    },
    {
        path: "Kanary/register",
        Component: Register,
    },
    
])