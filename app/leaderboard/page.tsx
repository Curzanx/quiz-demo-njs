import Scoreboard from "@/components/Scoreboard"
import { Button } from "@/components/ui/button"
import { ArrowBigLeft } from "lucide-react"
import Link from "next/link"

export default function Leaderboard() {
  return (
    <main>
      <section className="h-2/3 flex flex-col p-8 shadow-2xl shadow-primary/10 bg-primary/5 rounded-2xl max-w-4xl w-full gap-8">
        <Button
          variant="outline"
          asChild
          className="w-fit py-2 px-2 font-medium text-md"
        >
          <Link href="/">
            <ArrowBigLeft /> Menu
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <Scoreboard />
      </section>
    </main>
  )
}
