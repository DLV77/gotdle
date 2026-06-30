"use client";

import { useDifficulty, DIFFICULTY_CONFIG, type Difficulty } from "@/lib/difficulty";
import CustomSettingsPanel from "./CustomSettingsPanel";

export default function DifficultySelector() {
  const { difficulty, setDifficulty } = useDifficulty();

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <p
        className="text-xs text-[#9a8f80] uppercase tracking-widest"
        style={{ fontFamily: "var(--font-cinzel)" }}
      >
        Difficulty
      </p>
      <div className="flex gap-2 flex-wrap justify-center">
        {(Object.keys(DIFFICULTY_CONFIG) as Difficulty[]).map((d) => {
          const cfg = DIFFICULTY_CONFIG[d];
          const active = d === difficulty;
          return (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                active
                  ? "bg-[#d4af37] text-[#0c0c0d] border-[#d4af37] shadow-lg scale-105"
                  : "border-[#3d3d42] text-[#9a8f80] hover:border-[#d4af37] hover:text-[#d4af37]"
              }`}
              style={{ fontFamily: "var(--font-cinzel)" }}
              title={cfg.description}
            >
              {cfg.emoji} {cfg.label}
            </button>
          );
        })}
      </div>
      <p className="text-[10px] text-[#9a8f80] text-center max-w-xs">
        {DIFFICULTY_CONFIG[difficulty].description}
      </p>
      {difficulty === "custom" && <CustomSettingsPanel />}
    </div>
  );
}
