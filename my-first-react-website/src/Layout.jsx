import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
//first render navbar, then render all the child routes in outlet
export function Layout() {
    return (
        <>
            <Navbar /> 
            <main>
                <div className="bg-green-50 h-screen w-screen">
                    <Outlet/>
                </div>
            </main>
        </>
    );
}