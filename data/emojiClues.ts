export interface EmojiClue {
  id: number;
  characterId: number;
  characterName: string;
  emojis: string;
  flavorText: string;
}

export const EMOJI_CLUES: EmojiClue[] = [
  { id: 1,  characterId: 1,  characterName: "Ned Stark",           emojis: "❄️⚔️👨‍⚖️💀",     flavorText: "A Northern lord who put honour above everything — even his life." },
  { id: 2,  characterId: 18, characterName: "Daenerys Targaryen",  emojis: "🐉👸🔥🌍",     flavorText: "She crossed oceans and deserts to reclaim what was hers." },
  { id: 3,  characterId: 9,  characterName: "Tyrion Lannister",    emojis: "🍷🧠💬😂",     flavorText: "Sharp wit, sharper tongue. His mind was his best weapon." },
  { id: 4,  characterId: 49, characterName: "Jon Snow",            emojis: "❄️⚔️🐺🌙",     flavorText: "He died and came back. Still knew nothing." },
  { id: 5,  characterId: 5,  characterName: "Arya Stark",          emojis: "🗡️👁️📝❓",     flavorText: "She kept a list. She crossed everyone off it." },
  { id: 6,  characterId: 10, characterName: "Cersei Lannister",    emojis: "🍷👑💣😈",     flavorText: "She loved her children, her wine, and her schemes — in that order." },
  { id: 7,  characterId: 11, characterName: "Jaime Lannister",     emojis: "✋⚔️🦁❤️",     flavorText: "He lost something golden and found something truer." },
  { id: 8,  characterId: 71, characterName: "Hodor",               emojis: "🚪🐴💔🔁",     flavorText: "His name was his destiny, echoing across time." },
  { id: 9,  characterId: 61, characterName: "Sandor Clegane",      emojis: "🐕🔥😡🍗",     flavorText: "He feared fire most, but loved roast chicken best." },
  { id: 10, characterId: 68, characterName: "Petyr Baelish",       emojis: "🪙🕷️🌹🔪",     flavorText: "He climbed using chaos as his personal ladder." },
  { id: 11, characterId: 67, characterName: "Varys",               emojis: "🕵️💬🕸️🤫",     flavorText: "The Spider knew everyone's secrets, including yours." },
  { id: 12, characterId: 88, characterName: "Melisandre",          emojis: "🔥💎🔮🌑",     flavorText: "The Red Priestess saw visions in the flames — not all of them correct." },
  { id: 13, characterId: 33, characterName: "Olenna Tyrell",       emojis: "👵🌹🍵🗡️",     flavorText: "The sharpest tongue in Westeros came wrapped in flowers." },
  { id: 14, characterId: 36, characterName: "Oberyn Martell",      emojis: "🐍⚔️😏🔴",     flavorText: "The Red Viper: fast, passionate, and fatally over-confident." },
  { id: 15, characterId: 48, characterName: "Ramsay Bolton",       emojis: "🐕🏹😈❄️",     flavorText: "He hunted people for sport in the snowfields of the North." },
  { id: 16, characterId: 12, characterName: "Tywin Lannister",     emojis: "🦁💰⚖️😤",     flavorText: "He made the Lannister name synonymous with power." },
  { id: 17, characterId: 13, characterName: "Joffrey Baratheon",   emojis: "👑😈💜🍷",     flavorText: "A boy-king with all the cruelty and none of the wisdom." },
  { id: 18, characterId: 4,  characterName: "Sansa Stark",         emojis: "🐺🦁🌹👑",     flavorText: "She passed through lions and roses before becoming a queen." },
  { id: 19, characterId: 57, characterName: "Tormund Giantsbane",  emojis: "🧔‍♂️🔥❄️🦊",     flavorText: "Big claims, bigger heart. He had a thing for tall women." },
  { id: 20, characterId: 56, characterName: "Ygritte",             emojis: "🏹❄️💔❓",     flavorText: "She repeatedly reminded a certain man of his ignorance." },
  { id: 21, characterId: 81, characterName: "Khal Drogo",          emojis: "🐴⚡💪🌿",     flavorText: "The Great Khal who never lost a battle — until a witch changed everything." },
  { id: 22, characterId: 75, characterName: "Jaqen H'ghar",        emojis: "🎭🗡️💰🌫️",     flavorText: "A man of many faces. A man is not a man. Or is he?" },
  { id: 23, characterId: 66, characterName: "Brienne of Tarth",    emojis: "⚔️🛡️💙🚫",     flavorText: "She swore vows she kept even when no one else believed in them." },
  { id: 24, characterId: 87, characterName: "Davos Seaworth",      emojis: "🚢🤝🙏❤️",     flavorText: "From smuggler to lord — loyalty his only currency." },
  { id: 25, characterId: 28, characterName: "Theon Greyjoy",       emojis: "🏝️🔱💔🌅",     flavorText: "He was lost and found himself just in time to matter." },
  { id: 26, characterId: 3,  characterName: "Robb Stark",          emojis: "🐺👑⚔️💌",     flavorText: "The Young Wolf who lost a war because he followed his heart." },
  { id: 27, characterId: 50, characterName: "Samwell Tarly",       emojis: "📚🍖❤️🐻",     flavorText: "Brave despite himself. Killed a White Walker before it was cool." },
  { id: 28, characterId: 74, characterName: "High Sparrow",        emojis: "⛪🕊️👣⚡",     flavorText: "Bare-footed preacher who briefly held the most powerful city on earth." },
  { id: 29, characterId: 19, characterName: "Viserys Targaryen",   emojis: "👑😤🏖️🔥",     flavorText: "He called himself the dragon. He was not the dragon." },
  { id: 30, characterId: 79, characterName: "Missandei",           emojis: "🌍💬🔗❤️",     flavorText: "Translator, advisor, friend — her last word was a command." },
  { id: 31, characterId: 6,  characterName: "Bran Stark",          emojis: "🌳👁️🐦‍⬛🦽",     flavorText: "He couldn't walk, yet he could see everywhere — past, present, and future at once." },
];
