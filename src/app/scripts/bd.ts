import Creature from "./creature";
import Character from "./character";
// import

const orderedIntention = (turn: number) => {
  return turn === 1 ? 0 : 1;
};

function randomIntention(variations: number) {
  return () => Math.floor(Math.random() * variations);
}

export class CharacterDictionary {
  HPDict = {
    Ironclad: 80,
    Silent: 70,
    Defect: 75,
    Watcher: 72,
  };
  GoldDict = {
    Ironclad: 99,
    Silent: 99,
    Defect: 99,
    Watcher: 99,
  };
}
//    ||
//    ||
//    \/
export const Characters = {
  Ironclad: { hp: 80, gold: 99, imagesrc: "Ironclad.png" },
  Silent: { hp: 70, gold: 99, imagesrc: "Silent.png" },
  Defect: { hp: 75, gold: 99, imagesrc: "Defect.png" },
  Watcher: { hp: 72, gold: 99, imagesrc: "Watcher.png" },
};

export type Intention = (this: Creature, character: Character) => void;

export const Creatures = {
  Cultist: {
    hp: 55,
    imagesrc: "Cultist.png",
    block: 0,
    intentions: [
      function firstTurn() {},
      function otherTurns() {
        console.log("second turn");
      },
    ],
    intentionsOrder: orderedIntention,
  },
  // GreenSlime: new Creature(
  //   30,
  //   "GreenSlime.png",
  //   0,
  //   [
  //     function firstTurn() {
  //       Creature.prototype.applyDebuff("Frail",);
  //     },
  //     function secondTurn() {
  //       // dealAttackDamage(character,11);
  //     },
  //     function thirdTurn() {
  //       // shuffleCard(discardPile,"Slimed");
  //       // shuffleCard(discardPile,"Slimed");
  //     },
  //   ],
  //   randomIntention(3)
  // ),
  // cultist.makeMove(cultist.intentions[cultist.intentionsOrder])
  // как подключить методы Creature

  GreenSlime: {
    hp: 30,
    imagesrc: "GreenSlime.png",
    block: 0,
    intentions: [
      function firstTurn(this: Creature, character: Character) {
        this.applyDebuff("Frail", character);
      },
      function secondTurn(character: Character) {
        // Creature.prototype.attack(character, 11);
      },
      function thirdTurn() {
        // shuffleCard(discardPile,"Slimed");
        // shuffleCard(discardPile,"Slimed");
      },
    ],
    intentionsOrder: randomIntention(3),
  },
};

export const Cards = {
  // Red Cards
  RedDefend: {
    name: "Defend",
    picture: "",
    type: "skill",
    rarity: "starter",
    color: "red",
    cost: 1,
    upgrade: 0,
    // numbers:[5 + 3 * upgrade],
    // description:"Gain" + this.numbers[0] + "block",
  },
  RedStrike: {
    // name: string = "Strike";
    // picture: string = "";
    // type = "attack";
    // rarity = "starter";
    // color = "red";
    // cost = 1;
    // upgrade: number = 0;
    // numbers: number[] = [6 + 3 * this.upgrade];
    // description: string = "Deal" + this.numbers[0] + "damage";
  },
  // Green Cards

  // Blue Cards

  // Violet Cards
};
