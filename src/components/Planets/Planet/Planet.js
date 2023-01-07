import React, { useEffect, useState } from "react";
import DescriptionWithLink from "../../shared/DescriptionWithLink/DescriptionWithLink";
import GrayImg from "../../shared/GrayImg/GrayImg";

async function getSatellites(id) {
  let res = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await res.json();
  return data;
}

// Component Funtion
const Planet = (props) => {
  const [satellites, setSatellites] = useState([
    {
      satellites: [
        { name: "Phobos" },
        { name: "Deimos" },
        { name: "Umbriel" },
        { name: "Titania" },
        { name: "Oberon" },
      ],
    },
  ]);

  useEffect(() => {
    getSatellites(props.id).then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  let title;
  if (props.title_with_underline) {
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  } else {
    title = <h4>{props.name}</h4>;
  }
  return (
    <div>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <br />
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <hr />
      <h4>Satéllites</h4>
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
    </div>
  );
};

// class Planet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       satellites: [],
//     };
//   }

//   componentDidMount() {
//     getSatellites(this.props.id).then((data) => {
//       this.setState((state) => ({
//         satellites: data["satellites"],
//       }));
//     });
//   }

//   render() {

//   }
// }

export default Planet;
