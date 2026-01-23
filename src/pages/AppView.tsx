import { Outlet } from "react-router"

export const AppView = () => {
    return (
        <div className="w-full mx-auto overflow-x-hidden">
            <Outlet />
        </div>
    )
}