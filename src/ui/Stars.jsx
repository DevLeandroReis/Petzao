export function Stars({ value=0 }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <div aria-label={`Avaliação ${value} de 5`} style={{display:'inline-flex',gap:2}}>
      {Array.from({length:full}).map((_,i)=>(<Star key={`f${i}`} type="full" />))}
      {half && <Star type="half" />}
      {Array.from({length:empty}).map((_,i)=>(<Star key={`e${i}`} type="empty" />))}
    </div>
  )
}

function Star({ type }) {
  const color = type==='empty' ? '#6b7280' : '#fbbf24'
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={type==='empty'?'none':color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {type==='half' ? (
        <>
          <defs>
            <linearGradient id="halfGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="50%" stopColor={color} />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10 12 2" fill="url(#halfGrad)" />
          <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10 12 2" fill="none" />
        </>
      ) : (
        <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10 12 2" />
      )}
    </svg>
  )
}
