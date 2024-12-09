import Creature from "../creature";
import Debuffs from "../debuffs";
import Buffs from "../buffs";

export default class Cultist extends Creature {
  name: string = "Cultist";
  maxHP: number = 55;
  currentHP: number = this.maxHP;
  block: number = 0;
  debuffs = new Debuffs();
  buffs = new Buffs();

  // constructor() {
  //   // super();
  // }
}
