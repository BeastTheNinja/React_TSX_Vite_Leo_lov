import { Header } from "../Components/Header/Header"
import { Hero } from "../Components/HeroSection/Hero"
import { SectionCard } from "../Components/Section/SectionCard"
import { SectionFigure } from "../Components/Section/SectionFigure"

export const HomeView = () => {
    return (
        <>
            <Header />
            <Hero />
            <SectionCard />
            <SectionFigure />
        </>
    )
}