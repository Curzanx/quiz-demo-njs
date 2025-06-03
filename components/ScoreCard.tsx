export default function ScoreCard({
  place,
  name,
  score,
}: {
  place: number;
  name: string;
  score: number;
}) {
  // This component is used to display a single score card in the leaderboard
  return (
    <div className="flex items-center justify-between p-4 shadow-md rounded-lg bg-white">
      <h2>{place}</h2>
      <h4>{name}</h4>
      <h2>{score}</h2>
    </div>
  );
}
