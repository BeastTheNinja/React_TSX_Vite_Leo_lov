import { SectionCard } from "../Components/Section/SectionCard"
import { SectionFigure } from "../Components/Section/SectionFigure"
import { SectionMapFigure } from "../Components/Section/SectionMap"
import { SectionTeam } from "../Components/Section/SectionTeam"

export const HomeView = () => {
    return (
        <>
            <SectionCard />
            <SectionFigure />
            <SectionTeam />
            <SectionMapFigure />
        </>
    )
}