import { Character } from "@/data/characters";

export type MatchResult = "correct" | "partial" | "wrong" | "higher" | "lower";

export interface AttributeComparison {
  value: string;
  match: MatchResult;
}

export interface GuessResult {
  character: Character;
  house: AttributeComparison;
  gender: AttributeComparison;
  status: AttributeComparison;
  origin: AttributeComparison;
  titleTier: AttributeComparison;
  firstSeason: AttributeComparison;
}

export const HOUSE_GROUP_LABELS: Record<string, string> = {
  North: "The North",
  Lannister: "The Westerlands",
  Baratheon: "Baratheon",
  Greyjoy: "Iron Islands",
  Tyrell: "The Reach",
  Martell: "Dorne",
  "Tully-Arryn": "River/Vale",
  Targaryen: "Targaryen",
  Wall: "Night's Watch",
  Wildling: "Free Folk",
  Faith: "Faith",
  Independent: "Independent",
};

function compareHouse(guess: Character, answer: Character): AttributeComparison {
  if (guess.house === answer.house) return { value: guess.house, match: "correct" };
  if (guess.houseGroup === answer.houseGroup) return { value: guess.house, match: "partial" };
  return { value: guess.house, match: "wrong" };
}

function compareGender(guess: Character, answer: Character): AttributeComparison {
  return {
    value: guess.gender,
    match: guess.gender === answer.gender ? "correct" : "wrong",
  };
}

function compareStatus(guess: Character, answer: Character): AttributeComparison {
  return {
    value: guess.status,
    match: guess.status === answer.status ? "correct" : "wrong",
  };
}

function compareOrigin(guess: Character, answer: Character): AttributeComparison {
  if (guess.origin === answer.origin) return { value: guess.origin, match: "correct" };
  if (guess.continent === answer.continent) return { value: guess.origin, match: "partial" };
  return { value: guess.origin, match: "wrong" };
}

function compareTitleTier(guess: Character, answer: Character): AttributeComparison {
  const tiers: Record<string, number> = {
    Royalty: 1,
    "High Nobility": 2,
    Military: 3,
    Commoner: 4,
  };
  if (guess.titleTier === answer.titleTier) return { value: guess.titleTier, match: "correct" };
  if (Math.abs(tiers[guess.titleTier] - tiers[answer.titleTier]) === 1)
    return { value: guess.titleTier, match: "partial" };
  return { value: guess.titleTier, match: "wrong" };
}

function compareFirstSeason(guess: Character, answer: Character): AttributeComparison {
  const diff = guess.firstSeason - answer.firstSeason;
  if (diff === 0) return { value: `Season ${guess.firstSeason}`, match: "correct" };
  if (Math.abs(diff) === 1) return { value: `Season ${guess.firstSeason}`, match: diff > 0 ? "lower" : "higher" };
  return { value: `Season ${guess.firstSeason}`, match: diff > 0 ? "lower" : "higher" };
}

export function compareCharacters(guess: Character, answer: Character): GuessResult {
  return {
    character: guess,
    house: compareHouse(guess, answer),
    gender: compareGender(guess, answer),
    status: compareStatus(guess, answer),
    origin: compareOrigin(guess, answer),
    titleTier: compareTitleTier(guess, answer),
    firstSeason: compareFirstSeason(guess, answer),
  };
}

export function isCorrectGuess(result: GuessResult): boolean {
  return (
    result.house.match === "correct" &&
    result.gender.match === "correct" &&
    result.status.match === "correct" &&
    result.origin.match === "correct" &&
    result.titleTier.match === "correct" &&
    result.firstSeason.match === "correct"
  );
}

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
