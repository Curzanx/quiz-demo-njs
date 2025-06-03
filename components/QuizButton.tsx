"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useQuizManager } from "@/components/context/QuizProvider"

export default function QuizButton() {
  const quizManager = useQuizManager()
  return (
    <Button asChild>
      <Link href="/quiz" onClick={() => quizManager?.CreateQuiz()}>
        Start Quiz
      </Link>
    </Button>
  )
}
