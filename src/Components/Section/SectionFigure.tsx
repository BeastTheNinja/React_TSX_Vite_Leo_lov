import { CardFigure } from "../Card/CardFigure"
import HeroSection1 from '../../assets/images/HeroSection1.jpg';
import HeroSection2 from '../../assets/images/HeroSection2.jpg';

export const SectionFigure = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row justify-center relative mb-20 mt-10">
                <CardFigure title="INTET PROBLEM" description="Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen. Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!" imageUrl={HeroSection1} />
            </section>
            <section className="flex flex-col md:flex-row justify-center relative mb-20">
                <CardFigure title="EVIG GARANTI" description="Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen. Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!" imageUrl={HeroSection2} reverse />
            </section>
        </>
    )
}