"use client"

import { UserScore } from "@/interfaces/UserScore"
import { Question, Questions } from "@/models/Questions"
import React, { createContext, useContext, useState } from "react"

type QuizManager = {
  questions: Question[]
  leaderboard: UserScore[]
  questionIndex: number
  name: string
  score: number
  CreateQuiz: () => void
  CurrentQuestion: () => Question
  NextQuestion: () => void
  AnswerQuestion: (isCorrect: boolean) => void
  AnsweredQuestion: () => boolean
  IsLastQuestion: () => boolean
}

const QuizContext = createContext<QuizManager | null>(null)

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [leaderboard, setLeaderboard] = useState<UserScore[]>([])
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [name, setName] = useState<string>("player")
  const [score, setScore] = useState<number>(0)
  const [answeredQuestion, setAnsweredQuestion] = useState<boolean>(false)

  function CreateQuiz() {
    setQuestions(Questions)
    setName("")
    setAnsweredQuestion(false)
    setScore(0)
    setQuestionIndex(0)
  }

  function CurrentQuestion() {
    return questions[questionIndex]
  }

  function NextQuestion() {
    if (questionIndex != questions.length - 1) {
      setQuestionIndex(questionIndex + 1)
      setAnsweredQuestion(false)
    }
  }

  function AnswerQuestion(isCorrect: boolean) {
    if (isCorrect) {
      setScore(score + 3)
    }

    setAnsweredQuestion(true)
  }

  function AnsweredQuestion() {
    return answeredQuestion
  }

  function IsLastQuestion() {
    return questionIndex >= questions.length - 1
  }

  return (
    <QuizContext.Provider
      value={{
        questions,
        leaderboard,
        questionIndex,
        name,
        score,
        CreateQuiz,
        CurrentQuestion,
        NextQuestion,
        AnswerQuestion,
        AnsweredQuestion,
        IsLastQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export const useQuizManager = () => useContext(QuizContext)
