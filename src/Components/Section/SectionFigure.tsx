import { CardFigure } from "../Card/CardFigure"
import HeroSection1 from '../../assets/images/HeroSection1.jpg';
import HeroSection2 from '../../assets/images/HeroSection2.jpg';

export const SectionFigure = () => {
    return (
        <>
        <section className="flex flex-col md:flex-row justify-center relative mb-20">
            <CardFigure title="Section Title" description="lorem ipsum dolor sit amet consectetur adipiscing elit " imageUrl={HeroSection1} />
        </section>
        <section className="flex flex-col md:flex-row justify-center relative mb-20">
            <CardFigure title="Section Title" description="lorem ipsum dolor sit amet consectetur adipiscing elit " imageUrl={HeroSection2} reverse />
        </section>
        </>
    )
}