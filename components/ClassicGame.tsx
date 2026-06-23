"use client";

import { useState, useCallback } from "react";
import { CHARACTERS } from "@/data/characters";
import { compareCharacters, isCorrectGuess, pickRandom, GuessResult } from "@/lib/gameLogic";
import { useDifficulty, getPool, getHints } from "@/lib/difficulty";
import CharacterSearch from "./CharacterSearch";
import GuessRow, { GuessGridHeader } from "./GuessRow";
import VictoryModal from "./VictoryModal";
import type { Character } from "@/data/characters";

export default function ClassicGame() {
  const { difficulty, config } = useDifficulty();
  const MAX_GUESSES = config.maxGuesses.classic;

  function newGame() {
    const pool = getPool(CHARACTERS, config.pool);
    return pickRandom(pool);
  }

  const [answer, setAnswer] = useState<Character>(() => newGame());
  const [guesses, setGuesses] = useState<GuessResult[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [hintMsg, setHintMsg] = useState<string | null>(null);

  const hints = getHints(answer);
  const guessedIds = new Set(guesses.map((g) => g.character.id));
  const hintCost = config.hintCost;
  const canHint = hintCost !== -1 && hintsUsed < hints.length;
  const remaining = MAX_GUESSES - guesses.length;

  const handleGuess = useCallback(
    (character: Character) => {
      if (gameOver) return;
      const result = compareCharacters(character, answer);
      const nextGuesses = [...guesses, result];
      setGuesses(nextGuesses);
      setHintMsg(null);
      if (isCorrectGuess(result)) { setWon(true); setGameOver(true); }
      else if (nextGuesses.length >= MAX_GUESSES) { setWon(false); setGameOver(true); }
    },
    [answer, guesses, gameOver, MAX_GUESSES]
  );

  const handleHint = useCallback(() => {
    if (!canHint || gameOver) return;
    setHintMsg(hints[hintsUsed]);
    setHintsUsed((h) => h + 1);
  }, [canHint, gameOver, hints, hintsUsed]);

  const handlePlayAgain = useCallback(() => {
    setAnswer(newGame());
    setGuesses([]); setGameOver(false); setWon(false);
    setHintsUsed(0); setHintMsg(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty, config]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto px-4 py-6">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-black text-[#d4af37] uppercase tracking-widest" style={{ fontFamily: "var(--font-cinzel)" }}>
          GOTdle
        </h1>
        <p className="text-xs text-[#9a8f80] mt-1 uppercase tracking-wider">Classic Mode · Guess the Character</p>
        <hr className="divider-gold mt-3" />
      </div>

      {guesses.length === 0 && (
        <div className="rounded-lg border border-[#2a2a2e] bg-[#161618] px-4 py-3 text-xs text-[#9a8f80] text-center leading-relaxed">
          Guess any character. Each guess reveals how close you are.{" "}
          <span className="text-[#86efac]">Green</span> = exact match ·{" "}
          <span className="text-[#fde68a]">Yellow</span> = partial match ·{" "}
          <span className="text-[#6b7280]">Gray</span> = wrong. ↑↓ show season direction.
        </div>
      )}

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
              placeholder="Type a character name…"
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
            ? <>Guess {guesses.length} of {MAX_GUESSES} · {remaining} remaining · {config.emoji} {config.label}</>
            : <>{MAX_GUESSES} guesses · {config.emoji} {config.label}</>
        )}
      </p>

      {guesses.length > 0 && (
        <div className="flex flex-col gap-2 mt-2">
          <GuessGridHeader />
          <div className="flex flex-col gap-1.5">
            {guesses.map((result, i) => (
              <GuessRow key={result.character.id} result={result} index={i} />
            ))}
          </div>
        </div>
      )}

      {gameOver && (
        <VictoryModal won={won} answer={answer} guessCount={guesses.length} maxGuesses={MAX_GUESSES} onPlayAgain={handlePlayAgain} mode="classic" />
      )}
    </div>
  );
}
