import Debuffs from "./debuffs";
import Buffs from "./buffs";
import Card from "./cards/card";
import Character from "./character";
import { Intention } from "./bd";

export default class Creature {
  name: string = "";
  maxHP: number;
  image: string;
  block: number;

  currentHP: number;

  intentions: Intention[];

  intentionsOrder: (turn: number) => number;

  debuffs = new Debuffs();
  buffs = new Buffs();

  constructor(creature: {
    hp: number;
    imagesrc: string;
    block: number;
    intentions: Intention[];
    intentionsOrder: (turn: number) => number;
  }) {
    this.maxHP = creature?.hp;
    this.image = creature?.imagesrc;
    this.block = creature?.block;
    this.intentions = creature?.intentions;
    this.intentionsOrder = creature?.intentionsOrder;

    this.currentHP = this.maxHP;
  }
  // constructor(
  //   hp: number,
  //   imagesrc: string,
  //   block: number,
  //   intentions: (() => void)[],
  //   intentionsOrder: () => number
  // ) {
  //   this.maxHP = hp;
  //   this.image = imagesrc;
  //   this.block = block;
  //   this.intentions = intentions;
  //   // this.intentionsOrder = creature?.intentionsOrder;

  //   this.currentHP = this.maxHP;
  // }

  // Creature.prototype.attack()
  // GreenSlime.attack()

  attack(target: Creature, damage: number, times: number = 1) {
    if (this.isBuffed("Strength")) damage += this.buffs.buffStacks["Strength"];
    if (this.isDebuffed("StrengthNegative"))
      damage += this.debuffs.debuffStacks["StrengthNegative"];
    if (target.isDebuffed("Vulnerable")) damage = Math.round(damage * 1.5);
    if (this.isDebuffed("Weak")) damage = Math.round(damage * 0.75);
    target.takeDamage(damage, times);
  }
  dealDamage(target: Creature, damage: number, times: number = 1) {
    target.takeDamage(damage, times);
  }

  loseHP(value: number) {
    this.currentHP -= value;
    if (this.currentHP < 0) this.die();
  }
  healHP(value: number) {
    this.currentHP += value;
    if (this.currentHP > this.maxHP) this.currentHP = this.maxHP;
  }
  changeMaxHP(value: number) {
    if (value > 0) {
      this.maxHP += value;
      this.currentHP += value;
    }
    if (value < 0) {
      this.maxHP += value;
      if (this.currentHP > this.maxHP) this.currentHP = this.maxHP;
    }
  }

  takeDamage(damage: number, times: number = 1) {
    for (let i = times; i > 0; i--) {
      if (this.block > 0) {
        if (this.block < damage) {
          let tempDamage = damage - this.block;
          this.loseAllBlock();
          this.loseHP(tempDamage);
        }
        if (this.block >= damage) this.loseBlock(damage);
      }
      this.loseHP(damage);
    }
  }

  gainBlock(value: number, times: number = 1) {
    for (let i = times; i > 0; i--) this.block += value;
  }
  loseBlock(value: number) {
    this.block -= value;
  }
  loseAllBlock() {
    this.block = 0;
  }

  drawCard(value: number) {}
  discardCard() {}
  discardHand() {}

  shuffleCard(card: Card, deck: Card[]) {}

  gainBuff(buffName: keyof typeof this.buffs.buffStacks) {
    this.buffs.buffStacks[buffName] += 1;
  }
  gainDebuff(debuffName: keyof typeof this.debuffs.debuffStacks) {
    this.debuffs.debuffStacks[debuffName] += 1;
  }
  applyBuff(buffName: keyof typeof this.buffs.buffStacks, target: Creature) {
    target.buffs.buffStacks[buffName] += 1;
  }
  applyDebuff(
    debuffName: keyof typeof this.debuffs.debuffStacks,
    target: Creature
  ) {
    target.debuffs.debuffStacks[debuffName] += 1;
  }

  isDebuffed(debuffName: keyof typeof this.debuffs.debuffStacks): boolean {
    return this.debuffs.debuffStacks[debuffName] > 0;
  }
  isBuffed(buffName: keyof typeof this.buffs.buffStacks): boolean {
    return this.buffs.buffStacks[buffName] > 0;
  }

  inFightStart() {}
  inFightStartOfTurn(turn: number) {}
  inFightTurn(turn: number, character: Character) {
    const we = this.intentions[this.intentionsOrder(turn)];
    we.call(this, character);
  }
  inFightEndOfTurn(turn: number) {}

  die() {}
}
