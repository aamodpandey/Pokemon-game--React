import { Component } from "react";
import "./styles/pokecard.css";
class pokecard extends Component {
  static defaultProps = {
    id: 4,
    name: "Charmander",
    type: "fire",
    base_experience: 62,
  };
  render() {
    const { id, name, type, base_experience } = this.props.att;
    let myid =
      `${id}`.length == 1
        ? `00${id}`
        : `${id}`.length == 2
        ? `0${id}`
        : `${id}`;
    const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${myid}.png`;
    return (
      <div class="card-wrap ">
        <div className="pokecard shadow rounded ">
          <div className="card-image-container">
            <img className="card-image" src={src}></img>
          </div>
          <h3 className="card-heading">{name}</h3>
          <div className="">Type: {type}</div>
          <div className="">EXP: {base_experience}</div>
        </div>
      </div>
    );
  }
}
export default pokecard;
