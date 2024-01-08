function Score({
  className = '',
  icon,
  score,
  children,
}: {
  className?: string
  icon: string
  score: number
  children?: React.ReactNode
}) {
  return (
    <div className={className}>
      <div>
        <img src={icon} alt="icon" />
        {children}
      </div>
      <div>
        <p>{score}</p>
        <p> / 100</p>
      </div>
    </div>
  )
}

Score.Category = function ScoreCategory({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <p className={className}>{children}</p>
}

export default Score
