import '../../styles/GlobalFont.css'
interface CardTeamProps {
    src: string;
    alt: string;
    name: string;
    description: string;
    
}

export const CardTeam = ({ src, alt, name, description }: CardTeamProps) => {
    return (
        <figure>
            <img className="w-48 h-48 rounded-full border-indigo-900" src={src} alt={alt} />
            <figcaption className="w-44 h-56 text-center flex flex-col p-4 justify-start items-center">
                <h3 className="pb-5 text-blue-800 text-sm font-normal font-['Inter']">{name}</h3>
                <p className="border-b-6 border-indigo-900 pb-8 mb-2 text-black text-sm font-normal font-['Inter']">{description}</p>
            </figcaption>
        </figure>
    )
}