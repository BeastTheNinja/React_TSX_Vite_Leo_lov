import '../../styles/GlobalFont.css'
interface CardProps {
    title: string;
    description: string;
}


export const Card = ({ title, description }: CardProps) => {

    return (

        <div className="relative w-64 h-90  bg-neutral-50 rounded-lg shadow-[0px_0px_6px_1px_rgba(0,0,0,0.25)]">
            <h2 className="w-64 h-20 text-center justify-start text-blue-800 text-3xl font-normal font-['Jura']">{title}</h2>
            <p className="w-52 h-36  text-center justify-start text-black text-base font-normal font-['Inter']">{description}</p>
        </div>

    )
}