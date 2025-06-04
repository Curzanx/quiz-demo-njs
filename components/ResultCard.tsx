"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useQuizManager } from "./context/QuizProvider"

import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import QuizButton from "./QuizButton"

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Please add a name" })
    .max(50, { message: "Name must be less than 50 characters" }),
})

export default function ResultCard() {
  const quizManager = useQuizManager()
  const [submitted, setSubmitted] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (quizManager) {
      quizManager.AddScore(values.name, quizManager.score)
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <Card className="w-md">
      <CardHeader>
        <CardTitle className="text-lg text-medium">Results</CardTitle>
        <CardDescription className="text-2xl text-green-700 font-bold">
          Great Job on Completing!
        </CardDescription>
        <CardAction></CardAction>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Score: {quizManager?.score}</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="superstar" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your leaderboard display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={submitted}>
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div
          className={`${
            submitted ? "flex" : "hidden"
          } gap-4 justify-center items-center`}
        >
          <QuizButton />
          <Button asChild variant="outline">
            <Link href="/leaderboard">View Leaderboard</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
