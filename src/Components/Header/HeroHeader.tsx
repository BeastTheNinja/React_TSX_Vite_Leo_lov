import heroImage from '../../assets/images/HeroBG.jpg';

export const HeaderHero = () => {
    return (
        <section>
            <img src={heroImage} alt="Hero Image" className="w-full h-auto" />
        </section>
    );
}