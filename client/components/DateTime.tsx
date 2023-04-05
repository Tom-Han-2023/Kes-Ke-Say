import { useState, useEffect, useCallback } from 'react'

export default function DateTime() {
  const [clock, setClock] = useState<string[]>([])

  const refreshClock = useCallback(() => {
    const d = new Date()
    const localTime = d.getTime()
    const localOffset = d.getTimezoneOffset() * 60000
    const utc = localTime + localOffset
    const paris = utc + 3600000 * 2
    const newParis = new Date(paris)
    const parisTime = newParis.toLocaleTimeString('en-NZ', { hour12: false })
    const parisDate = newParis.toLocaleDateString('en-NZ')

    setClock([parisTime, parisDate])
  }, [])

  useEffect(() => {
    refreshClock()
    const token = setInterval(refreshClock, 1000)
    return () => {
      clearInterval(token)
    }
  }, [refreshClock])

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
