"use client";

import { Character } from "@/data/characters";
import { CharacterAvatar } from "./CharacterSearch";

interface Props {
  won: boolean;
  answer: Character;
  guessCount: number;
  maxGuesses: number;
  onPlayAgain: () => void;
  mode?: string;
}

export default function VictoryModal({
  won,
  answer,
  guessCount,
  maxGuesses,
  onPlayAgain,
  mode,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="w-full max-w-sm rounded-2xl border border-[#3d3d42] bg-[#161618] shadow-2xl p-6 flex flex-col items-center gap-4 text-center"
        style={{
          animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards",
        }}
      >
        {won ? (
          <>
            <div className="text-4xl">⚔️</div>
            <h2
              className="text-2xl font-black text-[#d4af37] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Victory!
            </h2>
            <p className="text-[#e8e0d0] text-sm">
              You guessed correctly in{" "}
              <span className="text-[#d4af37] font-bold">{guessCount}</span>{" "}
              {guessCount === 1 ? "guess" : "guesses"}!
            </p>
          </>
        ) : (
          <>
            <div className="text-4xl">💀</div>
            <h2
              className="text-2xl font-black text-red-400 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Defeated
            </h2>
            <p className="text-[#9a8f80] text-sm">
              You ran out of {maxGuesses} guesses.
            </p>
          </>
        )}

        {/* Answer card */}
        <div className="flex items-center gap-3 w-full rounded-xl border border-[#3d3d42] bg-[#1e1e21] px-4 py-3">
          <CharacterAvatar character={answer} size={56} />
          <div className="text-left min-w-0">
            <p
              className="font-bold text-[#d4af37] text-base truncate"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              {answer.name}
            </p>
            <p className="text-xs text-[#9a8f80]">{answer.house}</p>
            <p className="text-xs text-[#9a8f80]">
              {answer.title} · Season {answer.firstSeason}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <button
            onClick={onPlayAgain}
            className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-widest bg-[#d4af37] text-[#0c0c0d] hover:bg-[#f0d472] active:bg-[#a88c2a] transition-colors"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Play Again
          </button>
          {mode && (
            <a
              href="/"
              className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-widest border border-[#3d3d42] text-[#9a8f80] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors text-center"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Change Mode
            </a>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
