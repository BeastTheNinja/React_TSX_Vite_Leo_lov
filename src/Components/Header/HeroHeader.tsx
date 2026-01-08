import heroImage from '../../assets/images/HeroBG.jpg';
import '../../styles/GlobalFont.css';

export const HeaderHero = () => {
    return (
        <section className='relative'>
            <img src={heroImage} alt="Hero Image" className="w-full h-auto" />
            <h1 className="h-56 right-30 top-20 absolute justify-start"><span className="text-blue-800 text-9xl font-normal font-['Jura'] [text-shadow: 0px 4px 4px rgb(0 0 0 / 0.25)]">Leo</span><span className="text-white text-9xl font-normal font-['Jura'] [text-shadow: 0px 4px 4px rgb(0 0 0 / 0.25)]">-Lov</span></h1>
            <p className="h-5 right-39 top-50 absolute justify-start text-white text-base font-normal font-['Inter']">Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
        </section>
    );
}