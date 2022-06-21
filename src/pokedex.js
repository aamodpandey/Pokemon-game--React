import { Component } from "react";
import Pokecard from "./pokecard";
import "./styles/pokedex.css";
class pokedex extends Component {
  render() {
    const { iswinner, arr } = this.props;
    return (
      <div>
        <h3
          className={`d-block text-center mt-4 ${iswinner ? "green" : "pink"}`}
        >
          {iswinner ? `Winner` : `Loser`}
        </h3>
        <div className="container-fluid">
          <div className="pokedex gy-3 m-2 row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 ">
            {arr.map((i) => (
              <Pokecard className="col " att={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default pokedex;
