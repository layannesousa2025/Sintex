import { Outlet } from "react-router-dom";

export default function LayoutMenu() {
    return (
        <>
       <Banner />

       <Outlet />
       </>
    )
}