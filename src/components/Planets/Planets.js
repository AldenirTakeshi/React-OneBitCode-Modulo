import React from "react";
import Planet from "./Planet/Planet";

//Class component
class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [
        {
          name: "Mercúrio",
          description:
            "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg",
          linkURL: "https://pt.wikipedia.org/wiki/Mercúrio_(planeta)",
        },
        {
          name: "Marte",
          description:
            "Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.[1]",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/420px-OSIRIS_Mars_true_color.jpg",
          linkURL: "https://pt.wikipedia.org/wiki/Marte_(planeta)",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <h3>Planets List</h3>
        <button>Clique aqui</button>
        <hr />
        {this.state.planets.map((planet) => (
          <Planet
            name={planet.name}
            description={planet.description}
            imgUrl={planet.imgUrl}
            linkURL={planet.linkURL}
          />
        ))}
      </>
    );
  }
}

//Components de Functions
// const Planets = () => {};

export default Planets;
