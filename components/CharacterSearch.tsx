"use client";

import { useState, useRef, useEffect } from "react";
import { Character } from "@/data/characters";

interface Props {
  characters: Character[];
  guessedIds: Set<number>;
  onSelect: (character: Character) => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function CharacterSearch({
  characters,
  guessedIds,
  onSelect,
  disabled,
  placeholder = "Search for a character...",
}: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = query.trim().length < 1
    ? []
    : characters
        .filter(
          (c) =>
            !guessedIds.has(c.id) &&
            c.name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 8);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  function select(c: Character) {
    onSelect(c);
    setQuery("");
    setOpen(false);
    inputRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || filtered.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIdx]) select(filtered[activeIdx]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  // Scroll active item into view
  useEffect(() => {
    const item = listRef.current?.children[activeIdx] as HTMLElement;
    item?.scrollIntoView({ block: "nearest" });
  }, [activeIdx]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9a8f80] text-lg pointer-events-none">
          ⚔
        </span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#3d3d42] bg-[#1e1e21] text-[#e8e0d0] placeholder-[#9a8f80] focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
        />
      </div>

      {open && filtered.length > 0 && (
        <ul
          ref={listRef}
          className="absolute z-50 w-full mt-1 rounded-lg border border-[#3d3d42] bg-[#1e1e21] shadow-2xl max-h-80 overflow-y-auto"
        >
          {filtered.map((c, i) => (
            <li
              key={c.id}
              onMouseDown={() => select(c)}
              onMouseEnter={() => setActiveIdx(i)}
              className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors ${
                i === activeIdx ? "bg-[#2a2a2e]" : "hover:bg-[#2a2a2e]"
              }`}
            >
              <CharacterAvatar character={c} size={40} />
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#e8e0d0] truncate">{c.name}</p>
                <p className="text-xs text-[#9a8f80] truncate">{c.house}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {open && query.trim().length >= 1 && filtered.length === 0 && (
        <div className="absolute z-50 w-full mt-1 rounded-lg border border-[#3d3d42] bg-[#1e1e21] shadow-2xl px-4 py-3 text-sm text-[#9a8f80]">
          No characters found
        </div>
      )}
    </div>
  );
}

export function CharacterAvatar({
  character,
  size = 48,
}: {
  character: Character;
  size?: number;
}) {
  const [imgError, setImgError] = useState(false);
  const initials = character.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  if (character.imageUrl && !imgError) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={character.imageUrl}
        alt={character.name}
        width={size}
        height={size}
        onError={() => setImgError(true)}
        className="rounded-full object-cover object-top flex-shrink-0"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className="rounded-full bg-[#2a2a2e] border border-[#3d3d42] flex items-center justify-center text-[#d4af37] font-bold flex-shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.35 }}
    >
      {initials}
    </div>
  );
}
