"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { Character } from "@/data/characters";

export type Difficulty = "easy" | "medium" | "hard" | "maester" | "custom";

export interface DifficultyConfig {
  label: string;
  emoji: string;
  description: string;
  maxGuesses: Record<string, number>;
  hintCost: number; // -1=disabled, 0=free, N=costs N guesses
  pool: "major" | "all";
  imageBlurStart: number;
}

export interface CustomSettings {
  unlimitedGuesses: boolean;
  guessCount: number;       // 1–20, ignored when unlimitedGuesses=true
  hintsEnabled: boolean;
  hintCost: 0 | 1 | 2;
  pool: "major" | "all";
  imageBlurStart: number;   // 8–28
}

export const DEFAULT_CUSTOM_SETTINGS: CustomSettings = {
  unlimitedGuesses: false,
  guessCount: 8,
  hintsEnabled: true,
  hintCost: 1,
  pool: "all",
  imageBlurStart: 12,
};

export const DIFFICULTY_CONFIG: Record<Difficulty, DifficultyConfig> = {
  easy: {
    label: "Easy",
    emoji: "🟢",
    description: "More guesses, free hints, major characters only",
    maxGuesses: { classic: 10, image: 8, quote: 8, emoji: 8, death: 8 },
    hintCost: 0,
    pool: "major",
    imageBlurStart: 8,
  },
  medium: {
    label: "Medium",
    emoji: "🟡",
    description: "Standard difficulty, hints cost 1 guess",
    maxGuesses: { classic: 8, image: 6, quote: 6, emoji: 6, death: 6 },
    hintCost: 1,
    pool: "all",
    imageBlurStart: 12,
  },
  hard: {
    label: "Hard",
    emoji: "🟠",
    description: "Fewer guesses, hints cost 2 guesses",
    maxGuesses: { classic: 5, image: 4, quote: 4, emoji: 4, death: 4 },
    hintCost: 2,
    pool: "all",
    imageBlurStart: 18,
  },
  maester: {
    label: "Maester",
    emoji: "🔴",
    description: "Only 3 guesses. No hints. All characters.",
    maxGuesses: { classic: 3, image: 3, quote: 3, emoji: 3, death: 3 },
    hintCost: -1,
    pool: "all",
    imageBlurStart: 24,
  },
  custom: {
    label: "Custom",
    emoji: "⚙️",
    description: "Your rules, your game — configure everything below",
    maxGuesses: { classic: 8, image: 8, quote: 8, emoji: 8, death: 8 },
    hintCost: 1,
    pool: "all",
    imageBlurStart: 12,
  },
};

// Top ~50 most recognisable characters for Easy pool
export const MAJOR_CHARACTER_IDS = new Set([
  1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 18, 19, 22, 23, 25, 26,
  28, 29, 30, 32, 33, 36, 38, 47, 48, 49, 50, 51, 56, 57, 58, 61,
  63, 64, 66, 67, 68, 71, 75, 77, 78, 79, 80, 81, 84, 87, 88, 92,
  // New major additions
  104, 107, 110,
]);

export function getPool(
  characters: Character[],
  pool: "major" | "all"
): Character[] {
  if (pool === "major") return characters.filter((c) => MAJOR_CHARACTER_IDS.has(c.id));
  return characters;
}

export function getHints(answer: Character): string[] {
  return [
    `House / Allegiance: ${answer.house}`,
    `Gender: ${answer.gender}`,
    `Status at series end: ${answer.status}`,
    `Origin: ${answer.origin}`,
    `Rank: ${answer.titleTier}`,
    `First appeared: Season ${answer.firstSeason}`,
  ];
}

const STORAGE_KEY = "gotdle-difficulty";
const CUSTOM_STORAGE_KEY = "gotdle-custom-settings";

export function useCustomSettings() {
  const [settings, setSettingsState] = useState<CustomSettings>(DEFAULT_CUSTOM_SETTINGS);

  useEffect(() => {
    const raw = localStorage.getItem(CUSTOM_STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Partial<CustomSettings>;
        setSettingsState({ ...DEFAULT_CUSTOM_SETTINGS, ...parsed });
      } catch {
        // ignore corrupt data
      }
    }
  }, []);

  const setSettings = useCallback((next: Partial<CustomSettings>) => {
    setSettingsState((prev) => {
      const merged = { ...prev, ...next };
      localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(merged));
      return merged;
    });
  }, []);

  return { settings, setSettings };
}

export function useDifficulty() {
  const [difficulty, setDifficultyState] = useState<Difficulty>("medium");
  const { settings } = useCustomSettings();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Difficulty | null;
    if (stored && stored in DIFFICULTY_CONFIG) setDifficultyState(stored);
  }, []);

  const setDifficulty = useCallback((d: Difficulty) => {
    localStorage.setItem(STORAGE_KEY, d);
    setDifficultyState(d);
  }, []);

  const config: DifficultyConfig = useMemo(() => {
    if (difficulty !== "custom") return DIFFICULTY_CONFIG[difficulty];
    const guessCount = settings.unlimitedGuesses ? 999 : settings.guessCount;
    return {
      label: "Custom",
      emoji: "⚙️",
      description: "Your rules",
      maxGuesses: {
        classic: guessCount,
        image: guessCount,
        quote: guessCount,
        emoji: guessCount,
        death: guessCount,
      },
      hintCost: settings.hintsEnabled ? settings.hintCost : -1,
      pool: settings.pool,
      imageBlurStart: settings.imageBlurStart,
    };
  }, [difficulty, settings]);

  return { difficulty, setDifficulty, config };
}
