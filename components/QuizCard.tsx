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
import Link from "next/link"
import { useState } from "react"

export default function QuizCard() {
  const quizManager = useQuizManager()

  const [selected, setSelected] = useState<number>(-1)

  return (
    <Card className="w-4xl">
      <CardHeader>
        <CardTitle className="text-2xl text-bold">
          Question #{(quizManager?.questionIndex || 0) + 1} of{" "}
          {quizManager?.questions.length}
        </CardTitle>
        <CardDescription className="text-lg text-foreground">
          {quizManager?.CurrentQuestion().question}
        </CardDescription>
        <CardAction>
          <Button variant="ghost" asChild>
            <Link href="/">cancel</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
          {quizManager?.CurrentQuestion().answers.map((answer, index) => (
            <Button
              variant="outline"
              key={index}
              onClick={() => {
                quizManager.AnswerQuestion(answer.isCorrect)
                setSelected(index)
              }}
              className={`${selected === index ? "bg-primary/50" : ""}`}
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

            setSelected(-1)
          }}
          disabled={!quizManager?.AnsweredQuestion()}
        >
          {quizManager?.IsLastQuestion() ? "Submit Test" : "Next Question"}
        </Button>
      </CardFooter>
    </Card>
  )
}
