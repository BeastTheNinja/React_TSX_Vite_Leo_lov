interface CardFigureProps {
    title: string
    description: string
    imageUrl: string
    reverse?: boolean
}

export const CardFigure = ({
    title,
    description,
    imageUrl,
    reverse = false,
}: CardFigureProps) => {
    return (
        <figure
            className={`
        flex flex-col md:flex-row md:items-stretch
        ${reverse ? 'md:flex-row-reverse' : ''}
        max-w-6xl mx-auto
        border-8 border-indigo-900
        bg-neutral-50
      `}
        >
            {/* Image */}
            <img
                src={imageUrl}
                alt={title}
                className="
          w-full md:w-1/2
          h-auto
          object-cover
          md:h-full
        "
            />

            {/* Caption */}
            <figcaption
                className="
          w-full md:w-1/2
          flex flex-col
          justify-center
          items-center
          gap-6
          px-8
          py-12
          text-center
        "
            >
                <h2 className="text-3xl text-blue-800 font-['Jura']">
                    {title}
                </h2>

                <p className="max-w-prose text-base text-black font-['Inter']">
                    {description}
                </p>
            </figcaption>
        </figure>
    )
}
