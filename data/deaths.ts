export interface DeathClue {
  id: number;
  characterId: number;
  characterName: string;
  clue: string;
  season: number;
}

export const DEATH_CLUES: DeathClue[] = [
  { id: 1,  characterId: 1,  characterName: "Ned Stark",           season: 1, clue: "Beheaded on the steps of the Great Sept before a crowd, betrayed by those he trusted." },
  { id: 2,  characterId: 19, characterName: "Viserys Targaryen",   season: 1, clue: "Received the golden crown he always demanded — molten metal poured directly over his head." },
  { id: 3,  characterId: 22, characterName: "Robert Baratheon",    season: 1, clue: "Gored by a wild boar after his hunting wine was secretly made far stronger than usual." },
  { id: 4,  characterId: 81, characterName: "Khal Drogo",          season: 1, clue: "A great warrior undone not by a blade but by a witch's curse and a smothering pillow." },
  { id: 5,  characterId: 3,  characterName: "Robb Stark",          season: 3, clue: "Stabbed through the heart by a crossbow at a wedding celebration turned massacre." },
  { id: 6,  characterId: 2,  characterName: "Catelyn Stark",       season: 3, clue: "Throat slit at the same bloody wedding, moments after watching her son fall." },
  { id: 7,  characterId: 85, characterName: "Talisa Stark",        season: 3, clue: "Stabbed repeatedly through her pregnant belly at the Red Wedding." },
  { id: 8,  characterId: 13, characterName: "Joffrey Baratheon",   season: 4, clue: "Poisoned at his own royal wedding feast — the wine laced without him ever knowing." },
  { id: 9,  characterId: 12, characterName: "Tywin Lannister",     season: 4, clue: "Shot twice with a crossbow by his own son while seated on the privy." },
  { id: 10, characterId: 36, characterName: "Oberyn Martell",      season: 4, clue: "Skull crushed by an enormous man during trial by combat — he got too close demanding a confession." },
  { id: 11, characterId: 44, characterName: "Lysa Arryn",          season: 4, clue: "Pushed through a Moon Door high in the Eyrie mountains by the man she loved." },
  { id: 12, characterId: 84, characterName: "Shae",                season: 4, clue: "Strangled with a golden chain in a lord's chambers by the man whose heart she once held." },
  { id: 13, characterId: 56, characterName: "Ygritte",             season: 4, clue: "Cut down by an arrow during a wildling raid on the Wall, dying in the arms of the man she loved." },
  { id: 14, characterId: 83, characterName: "Jojen Reed",          season: 4, clue: "Stabbed by skeleton wights at the cave of the ancient being in the great tree." },
  { id: 15, characterId: 25, characterName: "Shireen Baratheon",   season: 5, clue: "Burned alive as a sacrifice by her own parents on a frozen battlefield to please a fire god." },
  { id: 16, characterId: 23, characterName: "Stannis Baratheon",   season: 5, clue: "Defeated in battle and executed in the forest by a female knight sworn to avenge a king he murdered." },
  { id: 17, characterId: 89, characterName: "Barristan Selmy",     season: 5, clue: "Cut down in an alley ambush by masked assassins serving the Sons of the Harpy." },
  { id: 18, characterId: 71, characterName: "Hodor",               season: 6, clue: "Held a door against an undead horde while a boy's vision travelled back in time and sealed his fate." },
  { id: 19, characterId: 47, characterName: "Roose Bolton",        season: 6, clue: "Stabbed in the stomach by his own legitimised bastard son who then took his place." },
  { id: 20, characterId: 48, characterName: "Ramsay Bolton",       season: 6, clue: "Mauled to death by his own starved hunting hounds after losing the Battle of the Bastards." },
  { id: 21, characterId: 86, characterName: "Walder Frey",         season: 6, clue: "Throat slit by a young woman wearing a dead man's face, after his sons had been served as the main course." },
  { id: 22, characterId: 32, characterName: "Margaery Tyrell",     season: 6, clue: "Consumed by wildfire in the Great Sept of Baelor, one of many caught in a single catastrophic explosion." },
  { id: 23, characterId: 92, characterName: "Lyanna Mormont",      season: 8, clue: "Crushed in the grip of a dead giant but drove a dragonglass blade through its eye as she died." },
  { id: 24, characterId: 68, characterName: "Petyr Baelish",       season: 7, clue: "Throat slit in the great hall of Winterfell, convicted by the very woman he spent years manipulating." },
  { id: 25, characterId: 33, characterName: "Olenna Tyrell",       season: 7, clue: "Drank poison willingly after Highgarden fell, then revealed her greatest secret to the man who gave it." },
  { id: 26, characterId: 63, characterName: "Jorah Mormont",       season: 8, clue: "Died surrounded by wights in the darkness of Winterfell, shielding his queen to the very last breath." },
  { id: 27, characterId: 67, characterName: "Varys",               season: 8, clue: "Burned alive by a dragon on the beach of Dragonstone, executed by the queen whose cause he abandoned." },
  { id: 28, characterId: 28, characterName: "Theon Greyjoy",       season: 8, clue: "Charged alone at the Night King with a broken spear, buying the only seconds that would ever matter." },
  { id: 29, characterId: 79, characterName: "Missandei",           season: 8, clue: "Beheaded in chains on the city walls, the most calculated cruelty to shatter a queen's restraint." },
  { id: 30, characterId: 18, characterName: "Daenerys Targaryen",  season: 8, clue: "Stabbed through the heart in the throne room she had just reduced to ash to finally claim." },
];
