"use client";

import { CharacterAvatar } from "./CharacterSearch";
import type { Character } from "@/data/characters";

interface GuessItemProps {
  character: Character;
  isCorrect: boolean;
  index: number;
}

export default function GuessItem({ character, isCorrect, index }: GuessItemProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border-2 px-3 py-2.5 transition-all guess-slide-in ${
        isCorrect
          ? "border-[#166534] bg-[#14532d]/60"
          : "border-[#3d3d42] bg-[#161618]"
      }`}
      style={{ animationDelay: `${index * 0.06}s`, animationFillMode: "both" }}
    >
      <div className={`rounded-full flex-shrink-0 ${isCorrect ? "ring-2 ring-[#86efac] ring-offset-1 ring-offset-[#14532d]" : "ring-1 ring-[#7f1d1d]/60 ring-offset-1 ring-offset-[#161618]"}`}>
        <CharacterAvatar character={character} size={56} />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-bold text-[#e8e0d0] truncate"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          {character.name}
        </p>
        <p className="text-[11px] text-[#9a8f80] truncate">{character.house}</p>
      </div>
      <span className={`text-lg font-black flex-shrink-0 ${isCorrect ? "text-[#86efac]" : "text-[#7f1d1d]"}`}>
        {isCorrect ? "✓" : "✗"}
      </span>
    </div>
  );
}
