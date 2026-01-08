 interface CardProps {
        title: string;
        description: string;
    }

    
export const Card = ({ title, description }: CardProps) => {
   
    return (
        <section className="relative rounded-lg bg-gray-100">
            <div className="w-64 h-40 bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </section>
    )
}