"use client";

import { useState, useCallback } from "react";
import { CHARACTERS } from "@/data/characters";
import { EMOJI_CLUES } from "@/data/emojiClues";
import { pickRandom } from "@/lib/gameLogic";
import { useDifficulty, getPool, getHints } from "@/lib/difficulty";
import CharacterSearch from "./CharacterSearch";
import VictoryModal from "./VictoryModal";
import GuessItem from "./GuessItem";
import type { Character } from "@/data/characters";
import type { EmojiClue } from "@/data/emojiClues";

export default function EmojiGame() {
  const { difficulty, config } = useDifficulty();
  const MAX_GUESSES = config.maxGuesses.emoji;

  function newGame() {
    const pool = getPool(CHARACTERS, config.pool);
    const available = EMOJI_CLUES.filter((q) => pool.some((c) => c.id === q.characterId));
    const clue = pickRandom(available);
    const answer = pool.find((c) => c.id === clue.characterId)!;
    return { clue, answer };
  }

  const [{ clue, answer }, setGame] = useState(() => newGame());
  const [guesses, setGuesses] = useState<Character[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [hintMsg, setHintMsg] = useState<string | null>(null);

  const hints = getHints(answer);
  const guessedIds = new Set(guesses.map((g) => g.id));
  const hintCost = config.hintCost;
  const canHint = hintCost !== -1 && hintsUsed < hints.length;
  const remainingGuesses = MAX_GUESSES - guesses.length - (hintCost > 0 ? hintsUsed * hintCost : 0);

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
        <p className="text-xs text-[#9a8f80] mt-1 uppercase tracking-wider">Emoji Mode · Decode the Character</p>
        <hr className="divider-gold mt-3" />
      </div>

      {/* Emoji card */}
      <div className="rounded-2xl border border-[#3d3d42] bg-[#161618] px-6 py-8 text-center">
        <p className="text-5xl sm:text-6xl tracking-wider mb-3">{clue.emojis}</p>
        <p className="text-sm text-[#9a8f80] italic">{clue.flavorText}</p>
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
              characters={CHARACTERS}
              guessedIds={guessedIds}
              onSelect={handleGuess}
              placeholder="Which character is this?"
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
        {!gameOver && <>{guesses.length > 0 ? `Guess ${guesses.length} of ${MAX_GUESSES}` : `${MAX_GUESSES} guesses · difficulty: ${config.emoji} ${config.label}`}</>}
      </p>

      {guesses.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#9a8f80] uppercase tracking-wider">Guesses</p>
          {guesses.map((c, i) => (
            <GuessItem key={c.id} character={c} isCorrect={c.id === answer.id} index={i} />
          ))}
        </div>
      )}

      {gameOver && (
        <VictoryModal won={won} answer={answer} guessCount={guesses.length} maxGuesses={MAX_GUESSES} onPlayAgain={handlePlayAgain} mode="emoji" />
      )}
    </div>
  );
}
