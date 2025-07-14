"use client"

import React, { useState, useEffect } from "react"

import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
})

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2024-11-23T08:00:00")

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 flex-col items-center rounded-md bg-[#F3E902] p-2 text-black">
        <span className={`${poppins.className} text-3xl font-bold`}>
          {timeLeft.days}
        </span>
        <span className="text-xs">dias</span>
      </div>
      <div className="flex h-16 w-16 flex-col items-center rounded-md bg-[#F3E902] p-2 text-black">
        <span className={`${poppins.className} text-3xl font-bold`}>
          {timeLeft.hours}
        </span>
        <span className="text-xs">horas</span>
      </div>
      <div className="flex h-16 w-16 flex-col items-center rounded-md bg-[#F3E902] p-2 text-black">
        <span className={`${poppins.className} text-3xl font-bold`}>
          {timeLeft.minutes}
        </span>
        <span className="text-xs">minutos</span>
      </div>
      <div className="flex h-16 w-16 flex-col items-center rounded-md bg-[#F3E902] p-2 text-black">
        <span className={`${poppins.className} text-3xl font-bold`}>
          {timeLeft.seconds}
        </span>
        <span className="text-xs">segundos</span>
      </div>
    </div>
  )
}

export default Countdown
