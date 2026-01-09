import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header"
import { Hero } from "../Components/HeroSection/Hero"
import { SectionCard } from "../Components/Section/SectionCard"
import { SectionFigure } from "../Components/Section/SectionFigure"
import { SectionMapFigure } from "../Components/Section/SectionMap"
import { SectionTeam } from "../Components/Section/SectionTeam"

export const HomeView = () => {
    return (
        <>
            <Header />
            <Hero />
            <SectionCard />
            <SectionFigure />
            <SectionTeam />
            <SectionMapFigure />
            <Footer />
        </>
    )
}