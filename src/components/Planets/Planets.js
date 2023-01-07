import React from "react";
import Planet from "./Planet/Planet";

//Chamada de api
async function getPlanets() {
  let res = await fetch("http://localhost:3000/api/planets.json");
  let data = await res.json();
  return data;
}
//Class component
class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
  }

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState((state) => ({
        planets: data["planets"],
      }));
    });
  }

  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState((state) => ({
      planets: new_planets,
    }));
  };

  duplicate = () => {
    let last_planets = this.state.planets[this.state.planets.length - 1];
    this.setState((state) => ({
      planets: [...this.state.planets, last_planets],
    }));
  };
  render() {
    return (
      <>
        <h3>Planets List</h3>
        <button onClick={this.removeLast}>Remove Last</button>
        <button onClick={this.duplicate}>Duplicate</button>
        <hr />
        {this.state.planets.map((planet, index) => (
          <Planet
            id={planet.id}
            key={index}
            name={planet.name}
            description={planet.description}
            img_url={planet.img_url}
            link={planet.link}
          />
        ))}
      </>
    );
  }
}

//Components de Functions
// const Planets = () => {};

export default Planets;
