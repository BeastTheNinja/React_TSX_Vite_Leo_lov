import { Outlet } from "react-router"
import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header"
import { Hero } from "../Components/HeroSection/Hero"

export const AppView = () => {
    return (
        <div className="w-full mx-auto overflow-x-hidden">
            <Header />          {/* Vises ØVERST på alle sider */}

            <Hero />          {/* Vises under header på alle sider */}

            <Outlet />        {/* Her kommer sidens indhold */}

            <Footer />        {/* Vises NEDERST på alle sider */}
        </div>
    )
}