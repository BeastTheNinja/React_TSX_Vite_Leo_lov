import ellipse1 from '../../assets/images/avatars/Ellipse 1.png';
import ellipse2 from '../../assets/images/avatars/Ellipse 2.png';
import ellipse3 from '../../assets/images/avatars/Ellipse 3.png';
import ellipse4 from '../../assets/images/avatars/Ellipse 4.png';
import { CardTeam } from '../Card/CardTeam';

export const SectionTeam = () => {
    return (
        <>
            <h2 className="text-center text-2xl font-bold mb-20">MØD HOLDET</h2>
            <section className="flex flex-col md:flex-row justify-around items-center">
                <CardTeam src={ellipse1} alt='Team Member 1' name='John Harbringer' description='"Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end peter"' />
                <CardTeam src={ellipse2} alt='Team Member 2' name='Bob Smith' description='Creative Designer focused on user-centric designs and experiences.' />
                <CardTeam src={ellipse3} alt='Team Member 3' name='Charlie Brown' description='Project Manager ensuring timely delivery and client satisfaction.' />
                <CardTeam src={ellipse4} alt='Team Member 4' name='Diana Prince' description='Marketing Specialist with expertise in digital campaigns and branding.' />
            </section>
        </>
    )
}