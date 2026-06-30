"use client";

import { useCustomSettings } from "@/lib/difficulty";

export default function CustomSettingsPanel() {
  const { settings, setSettings } = useCustomSettings();

  return (
    <div className="panel-appear rounded-2xl border border-[#3d3d42] bg-[#0e0e10] p-5 flex flex-col gap-5 w-full max-w-sm mx-auto">
      <p className="text-[10px] text-[#9a8f80] uppercase tracking-widest font-semibold" style={{ fontFamily: "var(--font-cinzel)" }}>
        ⚙️ Custom Rules
      </p>

      {/* Unlimited guesses */}
      <Row label="Guesses">
        <div className="flex items-center gap-3">
          <Pill active={settings.unlimitedGuesses} onClick={() => setSettings({ unlimitedGuesses: true })}>∞ Unlimited</Pill>
          <Pill active={!settings.unlimitedGuesses} onClick={() => setSettings({ unlimitedGuesses: false })}>Limited</Pill>
        </div>
        {!settings.unlimitedGuesses && (
          <div className="flex items-center gap-3 mt-2">
            <input
              type="range"
              min={1} max={20}
              value={settings.guessCount}
              onChange={(e) => setSettings({ guessCount: Number(e.target.value) })}
              className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: "#d4af37" }}
            />
            <span className="text-[#d4af37] font-black text-lg w-8 text-center">{settings.guessCount}</span>
          </div>
        )}
      </Row>

      {/* Hints */}
      <Row label="Hints">
        <div className="flex items-center gap-3">
          <Pill active={settings.hintsEnabled} onClick={() => setSettings({ hintsEnabled: true })}>On</Pill>
          <Pill active={!settings.hintsEnabled} onClick={() => setSettings({ hintsEnabled: false })}>Off</Pill>
        </div>
        {settings.hintsEnabled && (
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] text-[#9a8f80] uppercase tracking-wide">Cost:</span>
            {([0, 1, 2] as const).map((cost) => (
              <Pill key={cost} active={settings.hintCost === cost} onClick={() => setSettings({ hintCost: cost })}>
                {cost === 0 ? "Free" : `-${cost}`}
              </Pill>
            ))}
          </div>
        )}
      </Row>

      {/* Character pool */}
      <Row label="Character Pool">
        <div className="flex items-center gap-3">
          <Pill active={settings.pool === "major"} onClick={() => setSettings({ pool: "major" })}>Major only</Pill>
          <Pill active={settings.pool === "all"} onClick={() => setSettings({ pool: "all" })}>All {String.fromCodePoint(0x1F5FA)}</Pill>
        </div>
      </Row>

      {/* Image blur */}
      <Row label="Image Blur (Image mode)">
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={4} max={28}
            value={settings.imageBlurStart}
            onChange={(e) => setSettings({ imageBlurStart: Number(e.target.value) })}
            className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: "#d4af37" }}
          />
          <span className="text-[#d4af37] font-black text-sm w-10 text-center">{settings.imageBlurStart}px</span>
        </div>
        <p className="text-[10px] text-[#9a8f80] mt-1">
          {settings.imageBlurStart <= 8 ? "Very easy — face visible" : settings.imageBlurStart <= 14 ? "Easy — silhouette clear" : settings.imageBlurStart <= 20 ? "Medium — heavily blurred" : "Hard — almost impossible"}
        </p>
      </Row>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-xs text-[#9a8f80] uppercase tracking-wider">{label}</p>
      {children}
    </div>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
        active
          ? "bg-[#d4af37] text-[#0c0c0d] border-[#d4af37] shadow"
          : "border-[#3d3d42] text-[#9a8f80] hover:border-[#d4af37] hover:text-[#d4af37]"
      }`}
    >
      {children}
    </button>
  );
}
