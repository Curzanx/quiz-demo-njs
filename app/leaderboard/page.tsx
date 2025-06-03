import Scoreboard from "@/components/Scoreboard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Leaderboard() {
  return (
    <main>
      <section>
        <Button asChild>
          <Link href="/">
            Back to Menu
          </Link>
        </Button>
        <h1>Leaderboard</h1>
        <Scoreboard />
      </section>
    </main>
  );
}
