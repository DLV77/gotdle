export interface Quote {
  id: number;
  text: string;
  characterId: number;
  characterName: string;
  season: number;
  hint?: string;
}

export const QUOTES: Quote[] = [
  { id: 1, text: "Winter is coming.", characterId: 1, characterName: "Ned Stark", season: 1 },
  { id: 2, text: "You know nothing, Jon Snow.", characterId: 56, characterName: "Ygritte", season: 2 },
  { id: 3, text: "Dracarys.", characterId: 18, characterName: "Daenerys Targaryen", season: 3 },
  { id: 4, text: "The night is dark and full of terrors.", characterId: 88, characterName: "Melisandre", season: 2 },
  { id: 5, text: "Hold the door!", characterId: 71, characterName: "Hodor", season: 6 },
  { id: 6, text: "A girl has no name.", characterId: 5, characterName: "Arya Stark", season: 5 },
  { id: 7, text: "Not today.", characterId: 5, characterName: "Arya Stark", season: 8 },
  { id: 8, text: "Chaos isn't a pit. Chaos is a ladder.", characterId: 68, characterName: "Petyr Baelish", season: 3 },
  { id: 9, text: "That's what I do: I drink and I know things.", characterId: 9, characterName: "Tyrion Lannister", season: 6 },
  { id: 10, text: "Power resides where men believe it resides.", characterId: 67, characterName: "Varys", season: 2 },
  { id: 11, text: "The things I do for love.", characterId: 11, characterName: "Jaime Lannister", season: 1 },
  { id: 12, text: "Any man who must say 'I am the king' is no true king.", characterId: 12, characterName: "Tywin Lannister", season: 2 },
  { id: 13, text: "If you think this has a happy ending, you haven't been paying attention.", characterId: 48, characterName: "Ramsay Bolton", season: 3 },
  { id: 14, text: "I choose violence.", characterId: 10, characterName: "Cersei Lannister", season: 6 },
  { id: 15, text: "A Lannister always pays his debts.", characterId: 12, characterName: "Tywin Lannister", season: 1 },
  { id: 16, text: "The man who passes the sentence should swing the sword.", characterId: 1, characterName: "Ned Stark", season: 1 },
  { id: 17, text: "A mind needs books as a sword needs a whetstone.", characterId: 9, characterName: "Tyrion Lannister", season: 1 },
  { id: 18, text: "Leave one wolf alive and the sheep are never safe.", characterId: 5, characterName: "Arya Stark", season: 7 },
  { id: 19, text: "My watch has ended.", characterId: 49, characterName: "Jon Snow", season: 6 },
  { id: 20, text: "You're going to die tomorrow, Lord Bolton. Sleep well.", characterId: 4, characterName: "Sansa Stark", season: 6 },
  { id: 21, text: "The more people you love, the weaker you are.", characterId: 10, characterName: "Cersei Lannister", season: 1 },
  { id: 22, text: "I am the storm, brother.", characterId: 30, characterName: "Euron Greyjoy", season: 7 },
  { id: 23, text: "Valar Morghulis.", characterId: 75, characterName: "Jaqen H'ghar", season: 2 },
  { id: 24, text: "Shame! Shame! Shame!", characterId: 102, characterName: "Septa Unella", season: 6 },
  { id: 25, text: "Stick them with the pointy end.", characterId: 49, characterName: "Jon Snow", season: 1 },
  { id: 26, text: "There is only one war that matters. The Great War. And it is here.", characterId: 49, characterName: "Jon Snow", season: 7 },
  { id: 27, text: "What do we say to the god of death? Not today.", characterId: 5, characterName: "Arya Stark", season: 1, hint: "Said by this character's sword teacher, then repeated by the character" },
  { id: 28, text: "When you play the game of thrones, you win or you die.", characterId: 10, characterName: "Cersei Lannister", season: 1 },
  { id: 29, text: "Fire and blood.", characterId: 18, characterName: "Daenerys Targaryen", season: 7 },
  { id: 30, text: "I've seen things you wouldn't believe. I've lost things you'll never understand.", characterId: 63, characterName: "Jorah Mormont", season: 5 },
  { id: 31, text: "Nothing fucks you harder than time.", characterId: 87, characterName: "Davos Seaworth", season: 5 },
  { id: 32, text: "We are the watchers on the wall.", characterId: 49, characterName: "Jon Snow", season: 1 },
  { id: 33, text: "The night is dark and full of terrors, but the fire burns them all away.", characterId: 88, characterName: "Melisandre", season: 3 },
  { id: 34, text: "We don't get to choose who we love.", characterId: 2, characterName: "Catelyn Stark", season: 3 },
  { id: 35, text: "I am not your little princess.", characterId: 29, characterName: "Yara Greyjoy", season: 2 },
];
