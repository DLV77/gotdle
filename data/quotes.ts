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
  { id: 36, text: "I'm not Brandon Stark anymore.", characterId: 6, characterName: "Bran Stark", season: 7 },
  { id: 37, text: "I won every battle, but I'm losing this war.", characterId: 3, characterName: "Robb Stark", season: 3 },

  // Jaime Lannister
  { id: 38, text: "There are no men like me. There's only me.", characterId: 11, characterName: "Jaime Lannister", season: 3 },
  { id: 39, text: "By what right does the wolf judge the lion?", characterId: 11, characterName: "Jaime Lannister", season: 3 },
  { id: 40, text: "I've never loved anyone but Cersei.", characterId: 11, characterName: "Jaime Lannister", season: 1 },

  // Sansa Stark
  { id: 41, text: "I am a slow learner, it's true. But I learn.", characterId: 4, characterName: "Sansa Stark", season: 5 },
  { id: 42, text: "The North remembers.", characterId: 4, characterName: "Sansa Stark", season: 7 },
  { id: 43, text: "Winterfell is mine. Come and see.", characterId: 4, characterName: "Sansa Stark", season: 6 },

  // Stannis Baratheon
  { id: 44, text: "I was born a king. Not a prince. A king.", characterId: 23, characterName: "Stannis Baratheon", season: 4 },
  { id: 45, text: "We do not choose our destiny. But we must do our duty.", characterId: 23, characterName: "Stannis Baratheon", season: 4 },
  { id: 46, text: "If I do not press my claim, my claim will be forgotten.", characterId: 23, characterName: "Stannis Baratheon", season: 2 },

  // Khal Drogo
  { id: 47, text: "I will take what is mine with fire and blood.", characterId: 81, characterName: "Khal Drogo", season: 1 },
  { id: 48, text: "A Khal who cannot ride is no Khal.", characterId: 81, characterName: "Khal Drogo", season: 1 },

  // Olenna Tyrell
  { id: 49, text: "You've been responsible for more murders than the rest of us put together.", characterId: 33, characterName: "Olenna Tyrell", season: 3 },
  { id: 50, text: "Tell Cersei. I want her to know it was me.", characterId: 33, characterName: "Olenna Tyrell", season: 7 },
  { id: 51, text: "He really was a terrible king.", characterId: 33, characterName: "Olenna Tyrell", season: 7 },
  { id: 52, text: "I've been in the game a long time. I'm still here.", characterId: 33, characterName: "Olenna Tyrell", season: 5 },

  // Sandor Clegane
  { id: 53, text: "Plenty of courage. No sense.", characterId: 61, characterName: "Sandor Clegane", season: 2 },
  { id: 54, text: "I'm not your friend. I never have been.", characterId: 61, characterName: "Sandor Clegane", season: 4 },
  { id: 55, text: "Fire is the purest death.", characterId: 61, characterName: "Sandor Clegane", season: 8 },

  // Margaery Tyrell
  { id: 56, text: "I want to be the queen.", characterId: 32, characterName: "Margaery Tyrell", season: 2 },
  { id: 57, text: "You should try to win people's love, not their fear.", characterId: 32, characterName: "Margaery Tyrell", season: 3 },

  // Brienne of Tarth
  { id: 58, text: "I am not a lady. I am a knight.", characterId: 66, characterName: "Brienne of Tarth", season: 8 },
  { id: 59, text: "I will shield your back and keep your counsel and give my life for yours if need be.", characterId: 66, characterName: "Brienne of Tarth", season: 2 },

  // Tormund Giantsbane
  { id: 60, text: "We're all going to die, but at least we'll die with our boots on.", characterId: 57, characterName: "Tormund Giantsbane", season: 7 },
  { id: 61, text: "I never thought I'd die fighting side by side with an Andal.", characterId: 57, characterName: "Tormund Giantsbane", season: 8 },

  // Samwell Tarly
  { id: 62, text: "I'm tired of being afraid.", characterId: 50, characterName: "Samwell Tarly", season: 4 },
  { id: 63, text: "I read it in a book.", characterId: 50, characterName: "Samwell Tarly", season: 7 },

  // Joffrey Baratheon
  { id: 64, text: "Everyone is mine to torment.", characterId: 13, characterName: "Joffrey Baratheon", season: 3 },
  { id: 65, text: "A king does not ask. He commands.", characterId: 13, characterName: "Joffrey Baratheon", season: 2 },

  // Davos Seaworth
  { id: 66, text: "I'm a slow reader but I'm a good reader.", characterId: 87, characterName: "Davos Seaworth", season: 3 },
  { id: 67, text: "The dead are coming. Only the living can stop them.", characterId: 87, characterName: "Davos Seaworth", season: 7 },

  // Oberyn Martell
  { id: 68, text: "Unbowed. Unbent. Unbroken.", characterId: 36, characterName: "Oberyn Martell", season: 4 },
  { id: 69, text: "We don't hurt little girls in Dorne.", characterId: 36, characterName: "Oberyn Martell", season: 4 },
  { id: 70, text: "You raped her. You murdered her. You killed her children.", characterId: 36, characterName: "Oberyn Martell", season: 4 },

  // Theon Greyjoy
  { id: 71, text: "What is dead may never die, but rises again harder and stronger.", characterId: 28, characterName: "Theon Greyjoy", season: 2 },
  { id: 72, text: "I'm Theon Greyjoy, last scion of House Greyjoy.", characterId: 28, characterName: "Theon Greyjoy", season: 3 },

  // Robert Baratheon
  { id: 73, text: "I should not have made friends with your father. He never learned the habit of shutting up.", characterId: 22, characterName: "Robert Baratheon", season: 1 },
  { id: 74, text: "How do you fight someone if you can't hit them?", characterId: 22, characterName: "Robert Baratheon", season: 1 },
  { id: 75, text: "I have a hundred suitors... and none of them are you.", characterId: 22, characterName: "Robert Baratheon", season: 1 },

  // Roose Bolton
  { id: 76, text: "Your pain can end the moment you tell me what I want to know.", characterId: 47, characterName: "Roose Bolton", season: 3 },
  { id: 77, text: "A peaceful land. A quiet people. That has always been my rule.", characterId: 47, characterName: "Roose Bolton", season: 5 },

  // Ramsay Bolton
  { id: 78, text: "If you think this has a happy ending, you haven't been paying attention.", characterId: 48, characterName: "Ramsay Bolton", season: 3 },
  { id: 79, text: "My hounds will do as I command.", characterId: 48, characterName: "Ramsay Bolton", season: 6 },

  // Yara Greyjoy
  { id: 80, text: "We were kings when the Targaryens were still f***ing sheep.", characterId: 29, characterName: "Yara Greyjoy", season: 2 },

  // Missandei
  { id: 81, text: "This is not the end. Not for a Targaryen.", characterId: 79, characterName: "Missandei", season: 8 },

  // Jorah Mormont
  { id: 82, text: "All rulers are either butchers or meat.", characterId: 63, characterName: "Jorah Mormont", season: 3 },
  { id: 83, text: "You are the blood of the dragon. Fire cannot kill a dragon.", characterId: 63, characterName: "Jorah Mormont", season: 1 },

  // Bran Stark
  { id: 84, text: "Everything I did, I did for my people. For the North.", characterId: 6, characterName: "Bran Stark", season: 8 },

  // Varys
  { id: 85, text: "Influence grows like a weed in the cracks between stones.", characterId: 67, characterName: "Varys", season: 2 },
  { id: 86, text: "I have served tyrants most of my life. I know how to survive.", characterId: 67, characterName: "Varys", season: 7 },

  // Petyr Baelish
  { id: 87, text: "A man with no motive is a man no one suspects.", characterId: 68, characterName: "Petyr Baelish", season: 3 },
  { id: 88, text: "The realm. Do you know what the realm is? It's the thousand blades of Aegon's enemies, a story we agree to tell each other over and over.", characterId: 68, characterName: "Petyr Baelish", season: 3 },

  // Cersei Lannister
  { id: 89, text: "I will burn their cities to the ground if they touch my family.", characterId: 10, characterName: "Cersei Lannister", season: 6 },
  { id: 90, text: "Everyone who isn't us is an enemy.", characterId: 10, characterName: "Cersei Lannister", season: 1 },

  // Daenerys Targaryen
  { id: 91, text: "I am not a queen. I am a khaleesi.", characterId: 18, characterName: "Daenerys Targaryen", season: 1 },
  { id: 92, text: "I have been sold like a broodmare. I've been chained and betrayed, raped and defiled. Do you know what kept me standing?", characterId: 18, characterName: "Daenerys Targaryen", season: 5 },
  { id: 93, text: "Do not walk behind me. I may not lead. Do not walk before me. I may not follow. Walk beside me and be my friend.", characterId: 18, characterName: "Daenerys Targaryen", season: 1 },

  // Tyrion Lannister
  { id: 94, text: "Never forget what you are. The rest of the world will not. Wear it like armor and it can never be used to hurt you.", characterId: 9, characterName: "Tyrion Lannister", season: 1 },
  { id: 95, text: "I'm the king! I'll punish you!", characterId: 13, characterName: "Joffrey Baratheon", season: 2 },
  { id: 96, text: "Everywhere in the world they hurt little girls.", characterId: 36, characterName: "Oberyn Martell", season: 4 },

  // Jon Snow
  { id: 97, text: "I'm not afraid of death. But I'm afraid of failing.", characterId: 49, characterName: "Jon Snow", season: 7 },
  { id: 98, text: "The Long Night is coming. Only together can we hope to survive.", characterId: 49, characterName: "Jon Snow", season: 7 },
  { id: 99, text: "Love is the death of duty.", characterId: 49, characterName: "Jon Snow", season: 8 },
  { id: 100, text: "My name is Aegon Targaryen.", characterId: 49, characterName: "Jon Snow", season: 8 },
];
