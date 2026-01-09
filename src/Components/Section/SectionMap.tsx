import { CardFigure } from "../Card/CardFigure"
import map from '../../assets/images/map/leolov-location.png'; // nyt billede

export const SectionMapFigure = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center relative mb-20 mt-10">
            <CardFigure
                title="HER BOR VI"
                description="Vi har valgt at bosætte os i solen! Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget. “Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto´er."
                imageUrl={map}
            >
               
            </CardFigure>
        </section>
    )
}
