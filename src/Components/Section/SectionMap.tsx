import { CardFigure } from "../Card/CardFigure"
import map from '../../assets/images/map/leolov-location.png'; // nyt billede

export const SectionMapFigure = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center relative mb-20 mt-10">
            <CardFigure 
                title="New Section Title" 
                description="Dette er den nye sektion med genbrugt CardFigure komponent." 
                imageUrl={map} 
            />
        </section>
    )
}
