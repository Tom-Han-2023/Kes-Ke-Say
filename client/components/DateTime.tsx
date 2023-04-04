import { useState, useEffect } from 'react'

export default function DateTime() {
  const [clock, setClock] = useState<string[]>([])

  function refreshClock() {
    const d = new Date()
    const localTime = d.getTime()
    const localOffset = d.getTimezoneOffset() * 60000
    const utc = localTime + localOffset
    const paris = utc + 3600000 * 2
    const newParis = new Date(paris)
    const parisTime = newParis.toLocaleTimeString()
    const parisDate = newParis.toLocaleDateString()

    setClock([parisTime, parisDate])
  }

  useEffect(() => {
    const token = setInterval(refreshClock, 1000)
    return () => {
      clearInterval(token)
    }
  }, [])

  return (
    <div>
      <p className="max-w-xs mt-4 text-sm text-gray-600" data-testid="heading">
        Date & Time in Paris
      </p>
      {clock.length > 0 && (
        <>
          <p className="max-w-xs mt-4 text-sm text-gray-600" data-testid="time">
            {clock[0]}
          </p>
          <p className="max-w-xs mt-4 text-sm text-gray-600" data-testid="date">
            {clock[1]}
          </p>
        </>
      )}
    </div>
  )
}
