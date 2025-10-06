export default function TopTrackElement() {
  //hardkodirani podaci - jos uvijek nisu prilagodjeni api i bekendu
  const topArtists = [
    {
      rank: 1,
      name: "The Weeknd",
      genres: ["Pop", "R&B", "Alternative"],
      listens: 156,
      energy: 0.73,
      danceability: 0.67,
    },
    {
      rank: 2,
      name: "Dua Lipa",
      genres: ["Pop", "Dance"],
      listens: 89,
      energy: 0.81,
      danceability: 0.84,
    },
    {
      rank: 3,
      name: "Harry Styles",
      genres: ["Pop", "Rock"],
      listens: 76,
      energy: 0.62,
      danceability: 0.54,
    },
    {
      rank: 4,
      name: "Olivia Rodrigo",
      genres: ["Pop", "Alternative"],
      listens: 67,
      energy: 0.69,
      danceability: 0.42,
    },
    {
      rank: 5,
      name: "Billie Eilish",
      genres: ["Alternative", "Pop"],
      listens: 58,
      energy: 0.45,
      danceability: 0.51,
    },
  ];
  return <h1>Top track element here</h1>;
}
