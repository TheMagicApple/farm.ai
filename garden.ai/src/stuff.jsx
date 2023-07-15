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
                "Brussels",
                "Celery",
                "Collard Greens",
                "Green Onion",
                "Honeydew",
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
            fallingFruit.push(<FallingFruit image={this.state.fruit[i] + ".png"} left={i * 2 + "%"} delay={delay + "s"} fallDuration={fallDuration + "s"} spinDuration={spinDuration + "s"} />);
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
        var crops=[
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
            "Brussels",
            "Celery",
            "Collard Greens",
            "Green Onion",
            "Honeydew",
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
        ];

        this.selectCrop=this.selectCrop.bind(this);
        
        var soilBlocks = [];
        var soilPositions = [];
        var gardenSize = 6;
        var x = 3;
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
            x = 3+ (i + 1) * 6;
            y = 40 - (i + 1) * 7;
        }
        var cropSelects=[];
        for(let i=0;i<crops.length;i++){
            var left="80%";
            if(i%2==1) left="91.5%"
            cropSelects.push(<CropSelector onClick={this.selectCrop} left={left} top={9+Math.floor(i/2)*18+"%"} width="100px" height="100px" cropName={crops[i]} border="2px solid rgba(0,0,0,0.1)"/>)
        }
        this.state = {
            soilBlocks: soilBlocks,
            soilPositions: soilPositions,
            plants: [],
            plantPositions: [],
            cropSelects:cropSelects,
            cropSelected:"Tomato",
            selectX:"",
            selectY:"",
        };
        this.placeFruit = this.placeFruit.bind(this);
    }
    selectCrop(event,cropName){
        var crops=[
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
            "Brussels",
            "Celery",
            "Collard Greens",
            "Green Onion",
            "Honeydew",
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
        ];

        var cropSelects=[];
        for(let i=0;i<crops.length;i++){
            var left="80%";
            if(i%2==1) left="91.5%"
            if(crops[i]==cropName)cropSelects.push(<CropSelector onClick={this.selectCrop} left={left} top={9+Math.floor(i/2)*18+"%"} width="100px" height="100px" cropName={crops[i]} border="2px solid rgba(0,0,0,1)"/>);
            else cropSelects.push(<CropSelector onClick={this.selectCrop} left={left} top={9+Math.floor(i/2)*18+"%"} width="100px" height="100px" cropName={crops[i]} border="2px solid rgba(0,0,0,0.1)"/>);
        }

       
        
        this.setState({cropSelected:cropName,cropSelects});
        
        
    }
    placeFruit(event) {
        var x = event.screenX / 19.2;
        var y = (event.screenY-50) / 10;
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
            //alert("ALREADY PLANTED");
            var plantX = 3;
            var plantY = 40;
            plantX = 3 + minSoil[0] * 6;
            plantY = 40 - minSoil[0] * 7;
            plantX += 6 * minSoil[1];
            plantY += 7 * minSoil[1];
            var index=0;
            for(let i=0;i<plants.length;i++){
                if(plants[i].props.style.left==(plantX + 2.5 + "%") && plants[i].props.style.top==(plantY-5+"%")){
                    index=i;
                    break;
                }
            }
            plants.splice(index,1);
            var index2=0;
            for(let i=0;i<plantPositions.length;i++){
                if(plantPositions[i][0]==minSoil[0] && plantPositions[i][1]==minSoil[1]){
                    index2=i;
                    break;
                }
            }
            plantPositions.splice(index2,1);
        } else {
            var plantX = 3;
            var plantY = 40;
            plantX = 3 + minSoil[0] * 6;
            plantY = 40 - minSoil[0] * 7;
            plantX += 6 * minSoil[1];
            plantY += 7 * minSoil[1];
            plants.push(
                <img
                    className="gardenFood"
                    src={require("./asset/"+this.state.cropSelected+".png")}
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

        this.setState({ plants, plantPositions});
    }
    render() {
        return (
            <>
               {/*<Timeline></Timeline>*/}
                <div style={{position:"absolute",height:"100%",width:"100%",overflow:"scroll"}}>{this.state.cropSelects}</div>
                <div onClick={this.placeFruit}>{this.state.soilBlocks}</div>
                
                <div>{this.state.plants}</div>
                <div style={{position:"absolute",width:"2px",height:"100%",left:"75%",top:"0%",backgroundColor:"rgba(0,0,0,0.2)"}}></div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",position:"absolute",width:"25%",height:"8%",left:"75.1%",top:"0%",textAlign:"center",fontSize:"45px"}}>Select A Plant</div>
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
                        filter: "contrast(60%)",
                        
                    }}
                />
            </>
        );
    }
}

class CropSelector extends React.Component {
    constructor(props) {
        super(props);
        this.selectCrop=this.selectCrop.bind(this);
    }
    selectCrop(event){
        this.props.onClick(event,this.props.cropName);
    }
    render() {
            return <>
                
                <img
                    src={require("./asset/" + this.props.cropName+".png")}
                    style={{
                        position: "absolute",
                        left: this.props.left,
                        top: "calc("+this.props.top+" + 10px)",
                        width: this.props.width,
                        height: this.props.height,
                    }}
                />
                <h1 style = {{
                    position:"absolute",
                    left:"calc("+this.props.left+" - "+this.props.width+" / 2)",
                    top:"calc("+this.props.top+" + 90px)",
                    textAlign:"center",
                    width:"calc("+this.props.width+" * 2)",
                    fontFamily: "'Open Sans', sans-serif",
                    color:"rgba(0,0,0,1)",
                    fontSize:"25px",
                }}>{this.props.cropName}</h1>
                <div onClick={this.selectCrop} style={{position:"absolute", left:"calc("+this.props.left+" - "+this.props.width+" / 2)",top:"calc("+this.props.top+" + 0px)",width:"calc("+this.props.width+" * 2)",height:"calc("+this.props.height+" * 1.5)",border:this.props.border,borderRadius:"30px"}}></div>
            </>
    
    }
}

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        let maxTime = 0;
        /*for (let i=0; i<plants.length; i++) {
            if (predict(plants[i]) > maxTime) {
                maxTime = predict(plants[i]); // number of days
            }
        }*/
    }


    render() {
        return (
            <>
                <hr
                    style={{
                        color:"red",
                    }}
                />
                <CropMarker left="50%"></CropMarker>
            </>
        );
    }
}

class CropMarker extends React.Component { // marker that displays grop range in timeline
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <div style={{ 
            position:"absolute",
            left:this.props.left, 
            height: "10px",
            width: "2px",
            backgroundColor: "red",
        }}>

        </div>
        <div style={{
            position:"absolute",
            left:this.props.left,
        }}>
            {this.props.cropName}: props.time
        </div>
            </>
        )
    }
}

export { Home, Garden };
