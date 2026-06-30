"use client";

import { GuessResult, MatchResult } from "@/lib/gameLogic";
import { CharacterAvatar } from "./CharacterSearch";

const COLUMNS = [
  { key: "house", label: "House" },
  { key: "gender", label: "Gender" },
  { key: "status", label: "Status" },
  { key: "origin", label: "Origin" },
  { key: "titleTier", label: "Rank" },
  { key: "firstSeason", label: "Season" },
] as const;

function cellStyle(match: MatchResult) {
  switch (match) {
    case "correct":
      return "bg-[#14532d] border-[#166534] text-[#86efac]";
    case "partial":
      return "bg-[#78350f] border-[#92400e] text-[#fde68a]";
    case "higher":
      return "bg-[#78350f] border-[#92400e] text-[#fde68a]";
    case "lower":
      return "bg-[#78350f] border-[#92400e] text-[#fde68a]";
    default:
      return "bg-[#1f2937] border-[#374151] text-[#9ca3af]";
  }
}

function cellIcon(match: MatchResult) {
  if (match === "correct") return "✓";
  if (match === "higher") return "↑";
  if (match === "lower") return "↓";
  return null;
}

interface Props {
  result: GuessResult;
  index: number;
}

export default function GuessRow({ result, index }: Props) {
  return (
    <div
      className="flex items-center gap-2 w-full"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Character identity */}
      <div className="flex items-center gap-2 w-[140px] sm:w-[160px] flex-shrink-0">
        <CharacterAvatar character={result.character} size={48} />
        <span className="text-xs text-[#e8e0d0] truncate font-medium leading-tight">
          {result.character.name.split(" ")[0]}
        </span>
      </div>

      {/* Attribute cells */}
      <div className="flex gap-1 overflow-x-auto flex-1 pb-0.5">
        {COLUMNS.map((col) => {
          const attr = result[col.key];
          const icon = cellIcon(attr.match);
          return (
            <div
              key={col.key}
              className={`flex-shrink-0 flex flex-col items-center justify-center rounded border px-1 py-1.5 text-center transition-all ${cellStyle(
                attr.match
              )}`}
              style={{ minWidth: 64, width: 72, height: 52 }}
            >
              <span className="text-[10px] leading-none font-semibold truncate w-full text-center">
                {attr.value}
              </span>
              {icon && (
                <span className="text-xs mt-0.5 font-bold opacity-80">{icon}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function GuessGridHeader() {
  return (
    <div className="flex items-center gap-2 w-full mb-1">
      <div className="w-[140px] sm:w-[160px] flex-shrink-0" />
      <div className="flex gap-1 flex-1 overflow-x-auto pb-0.5">
        {COLUMNS.map((col) => (
          <div
            key={col.key}
            className="flex-shrink-0 text-center text-[10px] font-semibold text-[#9a8f80] uppercase tracking-wide"
            style={{ minWidth: 64, width: 72 }}
          >
            {col.label}
          </div>
        ))}
      </div>
    </div>
  );
}
