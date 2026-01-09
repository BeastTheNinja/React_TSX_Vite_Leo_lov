import '../../styles/GlobalFont.css'

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
        flex flex-col
        md:flex-row
        ${reverse ? 'md:flex-row-reverse' : ''}
        max-w-6xl mx-auto
      `}
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="
          w-full
          md:w-1/2
          h-auto
          border-l-8 border-t-8 border-b-8
          border-indigo-900
          object-cover
        "
      />

      {/* Caption */}
      <figcaption
        className="
          w-full
          md:w-1/2
          bg-neutral-50
          border-8 border-indigo-900
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
