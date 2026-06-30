import Link from "next/link";
import DifficultySelector from "@/components/DifficultySelector";
import { CHARACTERS } from "@/data/characters";
import { QUOTES } from "@/data/quotes";
import { EMOJI_CLUES } from "@/data/emojiClues";
import { DEATH_CLUES } from "@/data/deaths";

const MODES = [
  {
    href: "/classic",
    icon: "⚔️",
    title: "Classic",
    subtitle: "Guess the Character",
    description: "Guess a GoT character by their attributes. Each guess reveals how close you are with colour-coded hints.",
    gradient: "from-[#78350f] to-[#451a03]",
    border: "border-[#92400e]",
    badge: "Attributes",
  },
  {
    href: "/image",
    icon: "👁️",
    title: "Image",
    subtitle: "Reveal the Portrait",
    description: "A blurred portrait slowly reveals itself. Toggle colour on/off. Can you name the character before it's fully shown?",
    gradient: "from-[#1e3a5f] to-[#0f2035]",
    border: "border-[#2563eb]/40",
    badge: "Portrait",
  },
  {
    href: "/quote",
    icon: "💬",
    title: "Quote",
    subtitle: "Who Said It?",
    description: "Read a famous line from the show and guess which character spoke it. Wrong guesses unlock character hints.",
    gradient: "from-[#134e4a] to-[#042f2e]",
    border: "border-[#0d9488]/40",
    badge: "Quote",
  },
  {
    href: "/emoji",
    icon: "🎭",
    title: "Emoji",
    subtitle: "Decode the Character",
    description: "A string of emojis describes a character's story, traits, and fate. Can you decode who it is?",
    gradient: "from-[#3b0764] to-[#1e1030]",
    border: "border-[#7c3aed]/40",
    badge: "Emoji",
  },
  {
    href: "/death",
    icon: "💀",
    title: "Death",
    subtitle: "Who Died This Way?",
    description: "Read a description of a character's death and guess who met their end this way. No names — just the method.",
    gradient: "from-[#450a0a] to-[#1a0808]",
    border: "border-[#7f1d1d]/60",
    badge: "Death",
  },
];

export default function Home() {
  const stats = [
    { label: "Characters", value: CHARACTERS.length, icon: "👤" },
    { label: "Quotes", value: QUOTES.length, icon: "💬" },
    { label: "Emoji Clues", value: EMOJI_CLUES.length, icon: "🎭" },
    { label: "Death Clues", value: DEATH_CLUES.length, icon: "💀" },
    { label: "Game Modes", value: 5, icon: "⚔️" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-dvh px-4 py-12 gap-10">
      {/* Hero */}
      <div className="text-center flex flex-col items-center gap-3">
        <div className="text-5xl mb-1">🐉</div>
        <h1
          className="text-5xl sm:text-6xl font-black uppercase tracking-[0.15em] text-[#d4af37]"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          GOTdle
        </h1>
        <p className="text-[#9a8f80] text-sm sm:text-base uppercase tracking-widest" style={{ fontFamily: "var(--font-cinzel)" }}>
          A Game of Thrones Guessing Game
        </p>
        <hr className="divider-gold w-48 mt-1" />
        <p className="text-[#9a8f80] text-xs max-w-sm text-center leading-relaxed mt-1">
          Test your knowledge of the Seven Kingdoms · Unlimited plays · No daily wait
        </p>
      </div>

      {/* Live stats bar */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-0.5">
            <span className="text-xl">{s.icon}</span>
            <span className="text-lg font-black text-[#d4af37]" style={{ fontFamily: "var(--font-cinzel)" }}>{s.value}</span>
            <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Difficulty selector */}
      <DifficultySelector />

      {/* Mode cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {MODES.map((mode) => (
          <Link
            key={mode.href}
            href={mode.href}
            className={`relative flex flex-col gap-3 rounded-2xl border ${mode.border} bg-gradient-to-br ${mode.gradient} px-5 py-6 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg group cursor-pointer`}
          >
            <div className="flex items-start justify-between">
              <span className="text-3xl">{mode.icon}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9a8f80] border border-[#3d3d42] rounded-full px-2 py-0.5">
                {mode.badge}
              </span>
            </div>
            <div>
              <p className="text-lg font-black text-[#d4af37] uppercase tracking-wider leading-none" style={{ fontFamily: "var(--font-cinzel)" }}>
                {mode.title}
              </p>
              <p className="text-xs text-[#9a8f80] mt-0.5 uppercase tracking-wide">{mode.subtitle}</p>
            </div>
            <p className="text-sm text-[#e8e0d0]/70 leading-relaxed">{mode.description}</p>
            <div className="flex items-center gap-1 text-[#d4af37] text-xs font-semibold mt-auto pt-1 group-hover:gap-2 transition-all">
              Play now <span>→</span>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-[#3d3d42] text-xs text-center">
        Fan-made · Not affiliated with HBO or George R.R. Martin
      </p>
    </main>
  );
}
