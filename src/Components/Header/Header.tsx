import heroImage from '../../assets/images/HeroBG.jpg';
import '../../styles/GlobalFont.css';

export const HeaderHero = () => {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
            <img
                src={heroImage}
                alt="Hero Image"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
                <h1 className="text-6xl md:text-9xl font-normal font-['Jura'] text-blue-800 [text-shadow:0px_4px_4px_rgb(0_0_0_/_0.25)]">
                    Leo<span className="text-white">-Lov</span>
                </h1>
                <p className="mt-4 text-base md:text-lg text-white font-['Inter']">
                    Lov og ret kan være et plaster! Hvis du ellers har knaster!
                </p>
            </div>
        </section>
    );
}
