import Deck from "./deck";
import Character from "./character";
import Buffs from "./buffs";
import Debuffs from "./debuffs";
import Creature from "./creature";
import Relic from "./relic";
import Fight from "./fight";
import Cultist from "./enemies/cultist";
import { Creatures } from "./bd";

export default class Game {
  character: Character;
  gameDeck: Deck;
  relics: Relic[] = [];

  constructor(charName: "Ironclad" | "Silent" | "Defect" | "Watcher") {
    this.character = new Character(charName);
    this.gameDeck = new Deck(charName);
    this.start();
  }
  start() {}
  startFight() {
    // let enemies: Creature[] = [];
    // enemies.push(new Creature(Creatures.GreenSlime));
    // let newFight = new Fight(this.character, enemies);
  }

  getCharacter() {
    return this.character;
  }
}
