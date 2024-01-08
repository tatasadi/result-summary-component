import { ScoreVariant } from '~/types/ScoreVariant'

function Score({
  icon,
  score,
  category,
  variant,
}: {
  icon: string
  score: number
  category: string
  variant: ScoreVariant
}) {
  let textClass, bgClass
  switch (variant) {
    case ScoreVariant.Danger:
      textClass = 'text-light-red'
      bgClass = 'bg-very-light-red'
      break

    case ScoreVariant.Warning:
      textClass = 'text-orangey-yellow'
      bgClass = 'bg-very-light-orange'
      break

    case ScoreVariant.Success:
      textClass = 'text-green-teal'
      bgClass = 'bg-very-light-green'
      break

    case ScoreVariant.Neutral:
      textClass = 'text-cobalt-blue'
      bgClass = 'bg-very-light-blue'
      break

    default:
      break
  }

  return (
    <div className={`${bgClass} flex rounded-xl p-4`}>
      <div className="flex items-center gap-3">
        <img src={icon} alt="icon" className="h-5 w-5" />
        <p className={`${textClass} font-medium lg:text-lg`}>{category}</p>
      </div>
      <div className="ml-auto flex font-bold lg:text-lg">
        <p className="mr-2">{score}</p>
        <p className="text-dark-gray-blue opacity-50"> / 100</p>
      </div>
    </div>
  )
}

export default Score
