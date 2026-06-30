"use client";

import { useState, useCallback, useMemo } from "react";
import { CHARACTERS_WITH_IMAGES } from "@/data/characters";
import { pickRandom } from "@/lib/gameLogic";
import { useDifficulty, getPool, getHints } from "@/lib/difficulty";
import CharacterSearch from "./CharacterSearch";
import VictoryModal from "./VictoryModal";
import GuessItem from "./GuessItem";
import type { Character } from "@/data/characters";

export default function ImageGame() {
  const { difficulty, config } = useDifficulty();
  const MAX_GUESSES = config.maxGuesses.image;

  const stages = useMemo(() => {
    const b = config.imageBlurStart;
    return [
      [b,                        100, 0.75],
      [Math.round(b * 0.75),      80, 0.82],
      [Math.round(b * 0.55),      58, 0.88],
      [Math.round(b * 0.35),      32, 0.93],
      [Math.round(b * 0.16),      10, 0.97],
      [1,                          0, 1.0],
      [0,                          0, 1.0],
    ];
  }, [config.imageBlurStart]);

  function newGame() {
    const pool = getPool(CHARACTERS_WITH_IMAGES, config.pool).filter((c) => !!c.imageUrl);
    return pickRandom(pool);
  }

  const [answer, setAnswer] = useState<Character>(() => newGame());
  const [guesses, setGuesses] = useState<Character[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [colorEnabled, setColorEnabled] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [hintMsg, setHintMsg] = useState<string | null>(null);

  const hints = getHints(answer);
  const guessedIds = new Set(guesses.map((g) => g.id));
  const hintCost = config.hintCost;
  const canHint = hintCost !== -1 && hintsUsed < hints.length;

  const stage = Math.min(guesses.length, stages.length - 1);
  const [blur, grayscaleStage, brightness] = stages[gameOver ? stages.length - 1 : stage];
  const grayscale = colorEnabled ? 0 : grayscaleStage;

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
    setHintMsg(hints[hintsUsed]);
    setHintsUsed((h) => h + 1);
  }, [canHint, gameOver, hints, hintsUsed]);

  const handlePlayAgain = useCallback(() => {
    setAnswer(newGame());
    setGuesses([]); setGameOver(false); setWon(false);
    setColorEnabled(false); setHintsUsed(0); setHintMsg(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty, config]);

  const remaining = MAX_GUESSES - guesses.length;

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto px-4 py-6">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-black text-[#d4af37] uppercase tracking-widest" style={{ fontFamily: "var(--font-cinzel)" }}>
          GOTdle
        </h1>
        <p className="text-xs text-[#9a8f80] mt-1 uppercase tracking-wider">Image Mode · Reveal the Portrait</p>
        <hr className="divider-gold mt-3" />
      </div>

      {/* Image with controls */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#3d3d42] shadow-2xl" style={{ width: 280, height: 320 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={answer.imageUrl}
            alt="Mystery character"
            className="w-full h-full object-cover object-top transition-all duration-700"
            style={{ filter: `blur(${blur}px) grayscale(${grayscale}%) brightness(${brightness})` }}
            draggable={false}
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {Array.from({ length: MAX_GUESSES }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i < guesses.length
                    ? guesses[i].id === answer.id ? "bg-[#86efac]" : "bg-red-400"
                    : "bg-[#3d3d42]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Color toggle */}
        <button
          onClick={() => setColorEnabled((v) => !v)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
            colorEnabled
              ? "bg-[#d4af37] text-[#0c0c0d] border-[#d4af37]"
              : "border-[#3d3d42] text-[#9a8f80] hover:border-[#d4af37] hover:text-[#d4af37]"
          }`}
        >
          {colorEnabled ? "🎨 Color On" : "⬛ Color Off"}
        </button>
      </div>

      {/* Hint */}
      {hintMsg && (
        <div className="rounded-xl border border-[#78350f] bg-[#451a03] px-4 py-2 text-sm text-[#fde68a]">
          💡 {hintMsg}
        </div>
      )}

      {!gameOver && (
        <div className="flex gap-2">
          <div className="flex-1">
            <CharacterSearch
              characters={getPool(CHARACTERS_WITH_IMAGES, config.pool).filter((c) => !!c.imageUrl)}
              guessedIds={guessedIds}
              onSelect={handleGuess}
              placeholder="Who is this character?"
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
            : <>Each wrong guess reveals more · {MAX_GUESSES} chances · {config.emoji} {config.label}</>
        )}
      </p>

      {guesses.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#9a8f80] uppercase tracking-wider">Your guesses</p>
          {guesses.map((c, i) => (
            <GuessItem key={c.id} character={c} isCorrect={c.id === answer.id} index={i} />
          ))}
        </div>
      )}

      {gameOver && (
        <VictoryModal won={won} answer={answer} guessCount={guesses.length} maxGuesses={MAX_GUESSES} onPlayAgain={handlePlayAgain} mode="image" />
      )}
    </div>
  );
}
