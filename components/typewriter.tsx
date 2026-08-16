'use client'

import { useEffect, useState } from 'react'

const TAGLINES = [
  "Grow your wealth with people who've done it.",
  'Real estate. Agriculture. Technology.',
  "Invest with a banker's discipline.",
  'Steady compounding beats speculation.',
  'Your capital, managed like our own.',
]

const TYPE_SPEED = 55
const DELETE_SPEED = 30
const PAUSE_AFTER_TYPE = 2200
const PAUSE_AFTER_DELETE = 400

export function Typewriter() {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = TAGLINES[taglineIndex]

    if (!isDeleting && displayText === current) {
      const pause = window.setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE)
      return () => window.clearTimeout(pause)
    }

    if (isDeleting && displayText === '') {
      const pause = window.setTimeout(() => {
        setIsDeleting(false)
        setTaglineIndex((prev) => (prev + 1) % TAGLINES.length)
      }, PAUSE_AFTER_DELETE)
      return () => window.clearTimeout(pause)
    }

    const timeout = window.setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(current.slice(0, displayText.length - 1))
        } else {
          setDisplayText(current.slice(0, displayText.length + 1))
        }
      },
      isDeleting ? DELETE_SPEED : TYPE_SPEED,
    )

    return () => window.clearTimeout(timeout)
  }, [displayText, isDeleting, taglineIndex])

  return (
    <span className="inline">
      {displayText}
      <span
        className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.05em] animate-pulse bg-brand align-middle"
        aria-hidden="true"
      />
    </span>
  )
}
