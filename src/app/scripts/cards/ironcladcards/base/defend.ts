import Card from "../../card";
import Creature from "../../../creature";
import Character from "@/app/scripts/character";

export default class Defend extends Card {
  name: string = "Defend";
  picture: string = "";
  type = "skill";
  rarity = "starter";
  color = "red";
  cost = 1;
  upgrade: number = 0;
  numbers: number[] = [5 + 3 * this.upgrade];
  description: string = "Gain" + this.numbers[0] + "block";

  play(character: Character, target: Creature) {
    this.gainBlock(character, this.numbers[0]);
  }
}
