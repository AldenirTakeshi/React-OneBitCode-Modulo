import React from "react";
import DescriptionWithLink from "../../shared/DescriptionWithLink/DescriptionWithLink";
import GrayImg from "../../shared/GrayImg/GrayImg";

async function getSatellites(id) {
  let res = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await res.json();
  return data;
}

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      satellites: [],
    };
  }

  componentDidMount() {
    getSatellites(this.props.id).then((data) => {
      this.setState((state) => ({
        satellites: data["satellites"],
      }));
    });
  }

  render() {
    let title;
    if (this.props.title_with_underline) {
      title = (
        <h4>
          <u>{this.props.name}</u>
        </h4>
      );
    } else {
      title = <h4>{this.props.name}</h4>;
    }
    return (
      <div>
        {title}
        <DescriptionWithLink
          description={this.props.description}
          link={this.props.link}
        />
        <br />
        <GrayImg img_url={this.props.img_url} gray={this.props.gray} />
        <hr />
        <h4>Satéllites</h4>
        <ul>
          {this.state.satellites.map((satellite, index) => (
            <li key={index}>{satellite.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
// Component Funtion
// const Planet = (props) => {};

export default Planet;
