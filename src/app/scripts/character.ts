import Creature from "./creature";

export default class Character extends Creature {
  maxEnergy: number = 3;
  currentEnergy: number = this.maxEnergy;

  multiplierDict = {
    healHPMultiplier: 1,
    loseHPMultiplier: 0,
  };

  constructor(charName: string) {
    super();
    this.name = charName;
    this.setSpecifications(charName);
  }
  setSpecifications(name: string) {}

  loseEnergy(value: number) {
    this.currentEnergy -= value;
  }
  gainEnergy(value: number) {
    this.currentEnergy += value;
  }
  changeMaxEnergy(value: number): void {
    this.maxEnergy += value;
  }

  die() {}
}
