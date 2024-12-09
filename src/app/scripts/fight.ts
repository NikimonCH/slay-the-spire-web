import Creature from "./creature";
import Character from "./character";
import Card from "./cards/card";
import Strike from "./cards/ironcladcards/base/strike";
import Defend from "./cards/ironcladcards/base/defend";
import Metallicize from "./cards/ironcladcards/uncommon/metallicize";
import Hemokinesis from "./cards/ironcladcards/uncommon/hemokinesis";

export default class Fight {
  turn: number = 1;
  enemies: Creature[] = [];
  character: Character;

  drawPile: Card[] = [];
  //test hand
  hand: Card[] = [
    new Strike(),
    new Defend(),
    new Metallicize(),
    new Hemokinesis(),
  ];
  discardPile: Card[] = [];
  usedPile: Card[] = [];
  exhaustPile: Card[] = [];

  drawHandNumber: number = 5;

  fightEnded: boolean = false;

  constructor(character: Character, enemies: Creature[]) {
    this.character = character;
    this.enemies = enemies;
    this.startFight();
    while (!this.fightEnded) {
      // this.playerTurn();
      // this.enemiesTurn();
      this.testTurn();
    }
  }
  testTurn() {}
  startFight() {
    this.character.inFightStart();
    this.enemies.forEach((enemy) => enemy.inFightStart());
  }
  playerTurn() {
    this.character.inFightStartOfTurn(this.turn);
    this.character.inFightTurn(this.turn, this.character); //while(!this.turnEnded) play cards loh
    this.character.inFightEndOfTurn(this.turn);
  }
  enemiesTurn() {
    this.enemies.forEach((enemy) => enemy.inFightStartOfTurn(this.turn));
    this.enemies.forEach((enemy) =>
      enemy.inFightTurn(this.turn, this.character)
    );
    this.enemies.forEach((enemy) => enemy.inFightEndOfTurn(this.turn));
  }

  drawHand(value: number) {
    for (let i = 0; i < value; i++) this.drawCard();
  }
  //Написать
  shufleHand() {}
  //Сделать проверку на 0 карт в колодах и на 10 карт в руке
  drawCard() {
    if (this.drawPile.length === 0) this.reshuflePiles();
    if (this.hand.length === 10) return false;
    let drawNum = Math.floor(Math.random() * this.drawPile.length);
    this.hand.push(this.drawPile[drawNum]);
    this.drawPile.splice(drawNum);
  }
  //Написать
  reshuflePiles() {}
}
