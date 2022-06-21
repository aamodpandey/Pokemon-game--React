import { logDOM } from "@testing-library/react";
import { Component } from "react";
import Pokedex from "./pokedex";
// import "./pokedex.css";
class hand extends Component {
  render() {
    const arr = [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ];
    let p1 = [],
      p2 = [];
    for (let i = 0; i < 8; i++) {
      let index = Math.floor(Math.random() * 8);
      if (i <= 3) p1.push(arr[index]);
      else p2.push(arr[index]);
    }
    let p1sum = 0,
      p2sum = 0;
    for (let i of p1) {
      p1sum += i.base_experience;
    }
    for (let i of p2) {
      p2sum += i.base_experience;
    }
    const winner = p1sum > p2sum ? p1 : p2;
    return (
      <div>
        <Pokedex iswinner={winner == p1} arr={p1} />
        <Pokedex iswinner={winner == p2} arr={p2} />
      </div>
    );
  }
}
export default hand;
