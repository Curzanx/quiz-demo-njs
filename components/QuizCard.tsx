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
import { Button } from "./ui/button"
import { redirect } from "next/navigation"

export default function QuizCard() {
  const quizManager = useQuizManager()

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Question #{(quizManager?.questionIndex || 0) + 1} of{" "}
          {quizManager?.questions.length}
        </CardTitle>
        <CardDescription>
          {quizManager?.CurrentQuestion().question}
        </CardDescription>
        <CardAction>action..</CardAction>
      </CardHeader>
      <CardContent>
        <div>
          {quizManager?.CurrentQuestion().answers.map((answer, index) => (
            <Button
              key={index}
              onClick={() => quizManager.AnswerQuestion(answer.isCorrect)}
            >
              {answer.answer}
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            if (quizManager?.IsLastQuestion()) {
              redirect("/results")
            } else {
              quizManager?.NextQuestion()
            }
          }}
          disabled={!quizManager?.AnsweredQuestion()}
        >
          {quizManager?.IsLastQuestion() ? "Submit Test" : "Next Question"}
        </Button>
      </CardFooter>
    </Card>
  )
}
