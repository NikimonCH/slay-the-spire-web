import Card from "../../card";
import Creature from "../../../creature";
import Character from "@/app/scripts/character";

export default class Hemokinesis extends Card {
  name: string = "Hemokinesis";
  picture: string = "";
  type = "attack";
  rarity = "uncommon";
  color = "red";
  cost = 1;
  upgrade: number = 0;
  numbers: number[] = [2, 15 + 5 * this.upgrade];
  description: string = "Deal" + this.numbers[0] + "damage";

  play(executor: Character, target: Creature) {
    executor.loseHP(this.numbers[0]);
    this.attack(executor, target, this.numbers[1]);
  }
}
