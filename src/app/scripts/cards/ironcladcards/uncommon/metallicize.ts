import Card from "../../card";
import Creature from "../../../creature";
import Character from "@/app/scripts/character";

export default class Metallicize extends Card {
  name: string = "Metallicize";
  picture: string = "";
  type = "power";
  rarity = "uncommon";
  color = "red";
  cost = 1;
  upgrade: number = 0;
  numbers: number[] = [3 + 1 * this.upgrade];
  description: string = "Gain" + this.numbers[0] + "metallicize";

  play(character: Creature) {
    this.gainBuff(character, "Metallicize", this.numbers[0]);
  }
}
