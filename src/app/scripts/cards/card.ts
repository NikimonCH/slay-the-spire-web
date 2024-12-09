import Creature from "../creature";
import Character from "../character";
import Debuffs from "../debuffs";
import Buffs from "../buffs";

export default class Card {
  name: string = "";
  picture: string = "";
  type: string = "";
  rarity: string = "";
  color: string = "";
  cost: number | "x" = 0;
  description: string = "";
  upgrade: number = 0;
  exhaustive: boolean = false;

  constructor() {}

  attack(
    executor: Creature,
    target: Creature,
    damage: number,
    times: number = 1
  ) {
    if (executor.isBuffed("Strength"))
      damage += executor.buffs.buffStacks["Strength"];
    if (executor.isDebuffed("StrengthNegative"))
      damage += executor.debuffs.debuffStacks["StrengthNegative"];
    if (target.isDebuffed("Vulnerable")) damage = Math.round(damage * 1.5);
    if (executor.isDebuffed("Weak")) damage = Math.round(damage * 0.75);
    target.takeDamage(damage, times);
  }
  dealDamage(target: Creature, damage: number, times: number = 1) {
    target.takeDamage(damage, times);
  }
  takeDamage(target: Creature, damage: number, times: number = 1) {
    target.takeDamage(damage, times);
  }

  gainBlock(executor: Creature, block: number, times: number = 1) {
    if (executor.isBuffed("Dexterity"))
      block += executor.buffs.buffStacks["Dexterity"];
    if (executor.isDebuffed("DexterityNegative"))
      block += executor.buffs.buffStacks["Dexterity"];
    if (executor.isDebuffed("Frail")) block = Math.round(block * 0.75);
  }

  drawCard(amount: number) {}

  gainBuff(
    executor: Creature,
    buffName: keyof typeof executor.buffs.buffStacks,
    value: number
  ) {
    executor.buffs.buffStacks[buffName] += value;
  }
  gainDebuff(
    executor: Creature,
    debuffName: keyof typeof executor.debuffs.debuffStacks,
    value: number
  ) {
    executor.debuffs.debuffStacks[debuffName] += value;
  }
  applyBuff(
    target: Creature,
    buffName: keyof typeof target.buffs.buffStacks,
    value: number
  ) {
    target.buffs.buffStacks[buffName] += value;
  }
  applyDebuff(
    target: Creature,
    debuffName: keyof typeof target.debuffs.debuffStacks,
    value: number
  ) {
    target.debuffs.debuffStacks[debuffName] += value;
  }
  isEnergyEnough(character: Character): boolean {
    if (this.cost != "x") return !(character.currentEnergy <= this.cost);
    else return true;
  }
}
