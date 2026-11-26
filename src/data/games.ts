/**
 * All games on games.desiglo.com live here.
 * To add a game: add an entry, set status to "released", and (optionally) a playUrl.
 * Without a playUrl the Play button shows "Coming soon".
 * To use a real cover image: import it at the top and set `image`.
 */
export type GameStatus = "released" | "coming-soon";

export type Game = {
  slug: string;
  title: string;
  genre: string;
  status: GameStatus;
  tagline: string;
  description: string;
  platforms: string[];
  howToPlay: string[];
  controls: { action: string; input: string }[];
  playUrl?: string;
  image?: string;
  /** Built-in artwork used when there is no image yet. */
  cover: "glass-blast" | "placeholder";
  featured?: boolean;
};

export const games: Game[] = [
  {
    slug: "glass-blast",
    title: "Glass Blast: Block Puzzle",
    genre: "Puzzle",
    status: "released",
    tagline: "Drop glass blocks. Clear lines. Chase the high score.",
    description:
      "A calm, satisfying block puzzle made of glass. Place pieces on the board, complete full rows or columns to shatter them, and keep the board clear for as long as you can. Easy to pick up, hard to put down.",
    platforms: ["Browser", "Mobile friendly"],
    howToPlay: [
      "Drag a block from the tray onto the board.",
      "Fill a full row or column to clear it.",
      "Clear several lines at once for bigger combos.",
      "The game ends when none of your blocks fit on the board.",
    ],
    controls: [
      { action: "Move a block", input: "Drag with mouse or finger" },
      { action: "Place a block", input: "Release on the board" },
    ],
    // playUrl: "https://…",  ← add this when the game is live
    cover: "glass-blast",
    featured: true,
  },
  ...(["Arcade", "Casual", "Puzzle", "Strategy", "Casual"] as const).map(
    (genre, i): Game => ({
      slug: `project-${String(i + 2).padStart(2, "0")}`,
      title: `Project ${String(i + 2).padStart(2, "0")}`,
      genre,
      status: "coming-soon",
      tagline: "Something new is on the workbench.",
      description: "",
      platforms: [],
      howToPlay: [],
      controls: [],
      cover: "placeholder",
    }),
  ),
];

export const releasedGames = games.filter((g) => g.status === "released");
export const featuredGame = games.find((g) => g.featured) ?? games[0];
export const genres = ["All", ...Array.from(new Set(games.map((g) => g.genre)))];
