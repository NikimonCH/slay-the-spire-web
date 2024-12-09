import Card from "../../card";
import Creature from "../../../creature";
import Character from "@/app/scripts/character";

export default class Strike extends Card {
  name: string = "Strike";
  picture: string = "";
  type = "attack";
  rarity = "starter";
  color = "red";
  cost = 1;
  upgrade: number = 0;
  numbers: number[] = [6 + 3 * this.upgrade];
  description: string = "Deal" + this.numbers[0] + "damage";

  play(character: Character, target: Creature) {
    this.attack(character, target, this.numbers[0]);
  }
}
