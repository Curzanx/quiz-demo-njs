"use client"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useQuizManager } from "./context/QuizProvider"

export default function ResultCard() {
  const quizManager = useQuizManager()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
        <CardDescription>Great Job on Completing</CardDescription>
        <CardAction>action...</CardAction>
      </CardHeader>
      <CardContent>
        <h2>Score: {quizManager?.score}</h2>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
