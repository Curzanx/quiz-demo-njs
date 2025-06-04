"use client"

import { useQuizManager } from "./context/QuizProvider"
import ScoreCard from "./ScoreCard"

export default function Scoreboard() {
  const quizManager = useQuizManager()
  return (
    <div className="flex flex-col gap-4">
      {quizManager?.leaderboard.map((score, index) => (
        <ScoreCard
          key={index}
          place={index + 1}
          name={score.name}
          score={score.score}
        />
      ))}
    </div>
  )
}
