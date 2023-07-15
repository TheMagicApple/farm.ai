import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: [
        "Tomato",
        "Carrot",
        "Lettuce",
        "Cucumber",
        "Spinach",
        "Bell Pepper",
        "Broccoli",
        "Cabbage",
        "Onion",
        "Strawberry",
        "Potato",
        "Zucchini",
        "Green Bean",
        "Radish",
        "Watermelon",
        "Pumpkin",
        "Sweet Corn",
        "Cauliflower",
        "Eggplant",
        "Cilantro",
        "Cantaloupe",
        "Garlic",
        "Kale",
        "Peas",
        "Beetroot",
        "Raspberry",
        "Blueberry",
        "Mint",
        "Parsley",
        "Cherry",
        "Grapes",
        "Squash",
        "Artichoke",
        "Asparagus",
        "Brussels Sprouts",
        "Celery",
        "Collard Greens",
        "Green Onion",
        "Honeydew Melon",
        "Kiwi",
        "Lima Beans",
        "Mango",
        "Peach",
        "Pear",
        "Pineapple",
        "Pomegranate",
        "Rhubarb",
        "Tomatillo",
        "Turnip",
        "Watercress",
      ],
      fallingFruit: [],
    };
  }
  componentDidMount() {
    var fallingFruit = [];
    for (let i = 0; i < this.state.fruit.length; i++) {
      var delay = Math.random() * 10;
      var fallDuration = Math.random() * 5 + 3;
      var spinDuration = Math.random() * 3 + 1;
      fallingFruit.push(<FallingFruit image={this.state.fruit[i] + ".png"} left={i * 2 + "%"} delay={delay + "s"} fallDuration={fallDuration + "s"} spinDuration={spinDuration + "s"}/>);
    }
    this.setState({ fallingFruit });
  }
  render() {
    return (
      <>
        {this.state.fallingFruit}

        <div
          className="div"
          style={{
            width: "32%",
            height: "10%",
            left: "34%",
            top: "20%",
            fontSize: "75px",
            color: "black",
          }}
        >
          <b>UPGRADE YOUR</b>
        </div>
        <div
          className="div highlight2"
          style={{
            width: "32%",
            height: "17%",
            left: "34%",
            top: "32%",
            fontSize: "140px",
            color: "white",
          }}
        >
          <b>GARDEN</b>
        </div>
        <div
          className="div"
          style={{ width: "40%", left: "30%", top: "55%", fontSize: "30px" }}
        >
          We use AI data analysis to manage your garden, preventing hundreds of
          pounds of food being wasted.
        </div>
        <Link
          className="div button"
          to="/garden"
          style={{
            width: "300px",
            height: "80px",
            left: "810px",
            top: "73%",
            fontSize: "40px",
            color: "white",
            backgroundColor: "#00affa",
            borderRadius: "5px",
          }}
        >
          <b>Explore</b>
        </Link>
      </>
    );
  }
}
class Garden extends React.Component {
  constructor(props) {
    super(props);
    var soilBlocks = [];
    var soilPositions = [];
    var gardenSize = 6;
    var x = 5;
    var y = 40;
    for (let i = 0; i < gardenSize; i++) {
      var soilPosition = [];
      for (let k = 0; k < gardenSize; k++) {
        soilBlocks.push(
          <SoilBlock left={x + "%"} top={y + "%"} width="10%" height="20%" />
        );
        soilPosition.push([x, y]);
        x += 6;
        y += 7;
      }
      soilPositions.push(soilPosition);
      x = 5 + (i + 1) * 6;
      y = 40 - (i + 1) * 7;
    }
    this.state = {
      soilBlocks: soilBlocks,
      soilPositions: soilPositions,
      plants: [],
      plantPositions: [],
    };
    this.placeFruit = this.placeFruit.bind(this);
  }
  placeFruit(event) {
    var x = event.screenX / 19.2;
    var y = (event.screenY - 50) / 10.8;
    var minDistance = 10000000;
    var minSoil = [];

    for (let i = 0; i < this.state.soilPositions.length; i++) {
      for (let k = 0; k < this.state.soilPositions[i].length; k++) {
        var sx = this.state.soilPositions[i][k][0] + 5;
        var sy = this.state.soilPositions[i][k][1] + 10;
        var distance = Math.sqrt(Math.pow(sx - x, 2) + Math.pow(sy - y, 2));
        if (distance < minDistance) {
          minDistance = distance;
          minSoil = [i, k];
        }
      }
    }

    var plants = this.state.plants;
    var plantPositions = this.state.plantPositions;
    var alreadyPlanted = false;
    for (let i = 0; i < plantPositions.length; i++) {
      if (
        plantPositions[i][0] == minSoil[0] &&
        plantPositions[i][1] == minSoil[1]
      ) {
        alreadyPlanted = true;
        break;
      }
    }
    if (alreadyPlanted) {
      var plantX = 5;
      var plantY = 40;
      plantX = 5 + minSoil[0] * 6;
      plantY = 40 - minSoil[0] * 7;
      plantX += 6 * minSoil[1];
      plantY += 7 * minSoil[1];
      plants.splice(
        plants.indexOf(
          <img
            className="gardenFood"
            src={require("./asset/Tomato.png")}
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              left: plantX + 2.5 + "%",
              top: plantY - 5 + "%",
            }}
          />
        )
      );
      plantPositions.splice(plantPositions.indexOf(minSoil));
    } else {
      var plantX = 5;
      var plantY = 40;
      plantX = 5 + minSoil[0] * 6;
      plantY = 40 - minSoil[0] * 7;
      plantX += 6 * minSoil[1];
      plantY += 7 * minSoil[1];
      plants.push(
        <img
          className="gardenFood"
          src={require("./asset/Tomato.png")}
          style={{
            width: "100px",
            height: "100px",
            position: "absolute",
            left: plantX + 2.5 + "%",
            top: plantY - 5 + "%",
          }}
        />
      );
      plantPositions.push(minSoil);
    }

    this.setState({ plants, plantPositions });
  }
  render() {
    return (
      <>
        <div onClick={this.placeFruit}>{this.state.soilBlocks}</div>
        <div>{this.state.plants}</div>
      </>
    );
  }
}
class FallingFruit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <img
          className="fallingFruit"
          src={require("./asset/" + this.props.image)}
          style={{
            left: this.props.left,
            animationDelay: this.props.delay,
            animation:
              "fall " +
              this.props.fallDuration +
              " linear infinite,spin " +
              this.props.spinDuration +
              " linear infinite",
          }}
        />
      </>
    );
  }
}
class SoilBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <img
          src={require("./asset/soil.png")}
          style={{
            position: "absolute",
            left: this.props.left,
            top: this.props.top,
            width: this.props.width,
            height: this.props.height,
            filter: "contrast(70%)",
          }}
        />
      </>
    );
  }
}

export { Home, Garden };
