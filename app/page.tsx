import QuizButton from "@/components/QuizButton"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="h-2/3 flex flex-col justify-center items-center p-8 shadow-2xl shadow-primary/10 bg-primary/5 rounded-2xl max-w-4xl w-full gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Quizzy 2.53</h1>
          <h3 className="text-xl font-medium">Are you ready to be great?</h3>
        </div>

        <div className="flex justify-center items-center gap-4">
          <QuizButton />
          <Button variant="outline" asChild>
            <Link href="/leaderboard">View Leaderboard</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
