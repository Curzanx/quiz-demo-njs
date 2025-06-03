import QuizButton from "@/components/QuizButton"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section>
        <h1>Quizzy 2.53</h1>
        <h3>Are you ready to be great?</h3>
      </section>

      <section>
        <QuizButton />
        <Button asChild>
          <Link href="/leaderboard">View Leaderboard</Link>
        </Button>
      </section>
    </main>
  )
}
