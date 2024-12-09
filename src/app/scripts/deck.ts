import Card from "./cards/card";
import RedStrike from "./cards/ironcladcards/base/strike";
import RedDefend from "./cards/ironcladcards/base/defend";
import Hemokinesis from "./cards/ironcladcards/uncommon/hemokinesis";

export default class Deck {
  cards: Card[] = [];

  constructor(charName: "Ironclad" | "Silent" | "Defect" | "Watcher") {
    if (charName === "Ironclad") {
      this.gameInitIronclad();
    }
  }

  addCard(card: Card) {
    this.cards.push(card);
  }

  removeCard(card: Card) {}

  getDeck() {
    return this.cards;
  }

  gameInitIronclad() {
    this.addCard(new RedStrike());
    this.addCard(new RedStrike());
    this.addCard(new RedStrike());
    this.addCard(new RedStrike());
    this.addCard(new RedStrike());
    this.addCard(new RedDefend());
    this.addCard(new RedDefend());
    this.addCard(new RedDefend());
    this.addCard(new RedDefend());
    this.addCard(new Hemokinesis());
  }
}
