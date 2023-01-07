import React, { useState, useEffect } from "react";
import Planet from "./Planet/Planet";

//Chamada de api
async function getPlanets() {
  let res = await fetch("http://localhost:3000/api/planets.json");
  let data = await res.json();
  return data;
}

//Components de Functions
const Planets = () => {
  const [planets, setPlanets] = useState([
    {
      id: "mars",
      name: "Mars",
      description:
        "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
      link: "https://en.wikipedia.org/wiki/Mars",
    },
  ]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  const removeLast = () => {
    let new_planets = [...planets];
    new_planets.pop();
    setPlanets(new_planets);
  };

  const duplicate = () => {
    let last_planets = planets[planets.length - 1];
    setPlanets([...planets, last_planets]);
  };

  return (
    <>
      <h3>Planets List</h3>
      <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicate}>Duplicate</button>
      <hr />
      {planets.map((planet, index) => (
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
};

//Class component
// class Planets extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       planets: [],
//     };
//   }

//   componentDidMount() {
//     getPlanets().then((data) => {
//       this.setState((state) => ({
//         planets: data["planets"],
//       }));
//     });
//   }

//   render() {

//   }
// }

export default Planets;
