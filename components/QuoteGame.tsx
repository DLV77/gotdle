"use client";

import { useState, useCallback } from "react";
import { CHARACTERS } from "@/data/characters";
import { QUOTES } from "@/data/quotes";
import { pickRandom } from "@/lib/gameLogic";
import { useDifficulty, getPool, getHints } from "@/lib/difficulty";
import CharacterSearch from "./CharacterSearch";
import VictoryModal from "./VictoryModal";
import { CharacterAvatar } from "./CharacterSearch";
import type { Character } from "@/data/characters";
import type { Quote } from "@/data/quotes";

const AUTO_HINT_LABELS = ["House", "Gender", "Origin", "First Season", "Status"];

function getAutoHints(c: Character): string[] {
  return [c.house, c.gender, c.origin, `Season ${c.firstSeason}`, c.status];
}

function newGameFn(pool: Character[]): { quote: Quote; answer: Character } {
  const available = QUOTES.filter((q) => pool.some((c) => c.id === q.characterId));
  const quote = pickRandom(available);
  const answer = pool.find((c) => c.id === quote.characterId)!;
  return { quote, answer };
}

export default function QuoteGame() {
  const { difficulty, config } = useDifficulty();
  const MAX_GUESSES = config.maxGuesses.quote;

  function newGame() {
    return newGameFn(getPool(CHARACTERS, config.pool));
  }

  const [{ quote, answer }, setGame] = useState(() => newGame());
  const [guesses, setGuesses] = useState<Character[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [hintMsg, setHintMsg] = useState<string | null>(null);

  const autoHints = getAutoHints(answer);
  const manualHints = getHints(answer);
  const autoHintsRevealed = guesses.length;
  const guessedIds = new Set(guesses.map((g) => g.id));
  const hintCost = config.hintCost;
  const canHint = hintCost !== -1 && hintsUsed < manualHints.length;
  const remaining = MAX_GUESSES - guesses.length;

  const handleGuess = useCallback(
    (character: Character) => {
      if (gameOver) return;
      const next = [...guesses, character];
      setGuesses(next);
      setHintMsg(null);
      if (character.id === answer.id) { setWon(true); setGameOver(true); }
      else if (next.length >= MAX_GUESSES) { setWon(false); setGameOver(true); }
    },
    [answer, guesses, gameOver, MAX_GUESSES]
  );

  const handleHint = useCallback(() => {
    if (!canHint || gameOver) return;
    setHintMsg(manualHints[hintsUsed]);
    setHintsUsed((h) => h + 1);
  }, [canHint, gameOver, manualHints, hintsUsed]);

  const handlePlayAgain = useCallback(() => {
    setGame(newGame());
    setGuesses([]); setGameOver(false); setWon(false);
    setHintsUsed(0); setHintMsg(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty, config]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto px-4 py-6">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-black text-[#d4af37] uppercase tracking-widest" style={{ fontFamily: "var(--font-cinzel)" }}>
          GOTdle
        </h1>
        <p className="text-xs text-[#9a8f80] mt-1 uppercase tracking-wider">Quote Mode · Who Said It?</p>
        <hr className="divider-gold mt-3" />
      </div>

      {/* Quote card */}
      <div className="rounded-2xl border border-[#3d3d42] bg-[#161618] px-6 py-6 relative">
        <div className="text-[#d4af37] text-5xl font-black leading-none absolute -top-3 left-4 opacity-30">"</div>
        <p className="text-[#e8e0d0] text-lg sm:text-xl italic leading-relaxed text-center relative z-10" style={{ fontFamily: "var(--font-crimson)" }}>
          {quote.text}
        </p>
        <div className="text-[#d4af37] text-5xl font-black leading-none absolute -bottom-5 right-4 opacity-30">"</div>
      </div>

      {/* Auto-revealed hints per wrong guess */}
      {autoHintsRevealed > 0 && (
        <div className="rounded-xl border border-[#2a2a2e] bg-[#161618] px-4 py-3 flex flex-col gap-2">
          <p className="text-[10px] font-semibold text-[#9a8f80] uppercase tracking-widest">Hints unlocked</p>
          {autoHints.slice(0, autoHintsRevealed).map((hint, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="text-[#9a8f80] w-20 text-xs">{AUTO_HINT_LABELS[i]}:</span>
              <span className="text-[#fde68a] font-medium">{hint}</span>
            </div>
          ))}
        </div>
      )}

      {/* Manual hint message */}
      {hintMsg && (
        <div className="rounded-xl border border-[#78350f] bg-[#451a03] px-4 py-2 text-sm text-[#fde68a]">
          💡 {hintMsg}
        </div>
      )}

      {!gameOver && (
        <div className="flex gap-2">
          <div className="flex-1">
            <CharacterSearch
              characters={getPool(CHARACTERS, config.pool)}
              guessedIds={guessedIds}
              onSelect={handleGuess}
              placeholder="Who said this?"
            />
          </div>
          {canHint && (
            <button
              onClick={handleHint}
              className="flex-shrink-0 px-3 py-2 rounded-lg border border-[#3d3d42] text-[#9a8f80] hover:border-[#d4af37] hover:text-[#d4af37] text-xs transition-colors"
              title={hintCost === 0 ? "Free hint" : `Costs ${hintCost} guess${hintCost > 1 ? "es" : ""}`}
            >
              💡{hintCost > 0 ? ` -${hintCost}` : ""}
            </button>
          )}
        </div>
      )}

      <p className="text-center text-xs text-[#9a8f80]">
        {!gameOver && (
          guesses.length > 0
            ? <>Guess {guesses.length} of {MAX_GUESSES} · {remaining} remaining</>
            : <>Each wrong guess unlocks a hint · {MAX_GUESSES} chances · {config.emoji} {config.label}</>
        )}
      </p>

      {guesses.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <p className="text-xs text-[#9a8f80] uppercase tracking-wider">Your guesses</p>
          {guesses.map((c) => (
            <div key={c.id} className={`flex items-center gap-3 rounded-lg border px-3 py-2 ${c.id === answer.id ? "border-[#166534] bg-[#14532d]" : "border-[#374151] bg-[#1f2937]"}`}>
              <CharacterAvatar character={c} size={32} />
              <span className="text-sm text-[#e8e0d0]">{c.name}</span>
              <span className="ml-auto text-base">{c.id === answer.id ? "✓" : "✗"}</span>
            </div>
          ))}
        </div>
      )}

      {gameOver && (
        <VictoryModal won={won} answer={answer} guessCount={guesses.length} maxGuesses={MAX_GUESSES} onPlayAgain={handlePlayAgain} mode="quote" />
      )}
    </div>
  );
}
