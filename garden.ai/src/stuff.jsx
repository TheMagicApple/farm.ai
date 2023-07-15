import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers.js";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
var predictor = require("./predictor.js")
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
        crops.sort();
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
            predictAnswer:"",
            cropsPlaced:[],
            editingStyle:{color: "white",backgroundColor: "#00affa",border:"none",opacity:"1"},
            managingStyle:{color: "#00affa",backgroundColor: "transparent",border:"2px solid #00affa",opacity:"0"},
            cropTypes:[], //sample data
            cropTimes:[], //also sample data
            dayPx:0, //day to pixels ratio for timeline
        };
        this.placeFruit = this.placeFruit.bind(this);
        this.activateEditing=this.activateEditing.bind(this);
        this.activateManaging=this.activateManaging.bind(this);
        
    }
    predictTime(cropName){
        var predictor = require("./predictor.js");
        predictor.initialize(() => {
            var answer=predictor.predict(cropName, 0);
            this.setState({predictAnswer:answer});
        });
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
        crops.sort();
        var cropSelects=[];
        for(let i=0;i<crops.length;i++){
            var left="80%";
            if(i%2==1) left="91.5%"
            if(crops[i]==cropName)cropSelects.push(<CropSelector onClick={this.selectCrop} left={left} top={9+Math.floor(i/2)*18+"%"} width="100px" height="100px" cropName={crops[i]} border="2px solid rgba(0,0,0,1)"/>);
            else cropSelects.push(<CropSelector onClick={this.selectCrop} left={left} top={9+Math.floor(i/2)*18+"%"} width="100px" height="100px" cropName={crops[i]} border="2px solid rgba(0,0,0,0.1)"/>);
        }

        this.predictTime(cropName);
        setTimeout(() => {alert(Math.round(this.state.predictAnswer.time)+" "+this.state.predictAnswer.amount);}, 500);
        
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
        var cropsPlaced=this.state.cropsPlaced;
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
            cropsPlaced.splice(cropsPlaced.indexOf(plants[index].props.cropName),1);
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
                    cropName={this.state.cropSelected} 
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
            cropsPlaced.push(this.state.cropSelected);
        }
        this.setState({ plants, plantPositions,cropsPlaced});
    }
    activateEditing(){
        this.setState({ editingStyle:{color: "white",backgroundColor: "#00affa",border:"2px solid transparent",opacity:"1"},managingStyle:{color: "#00affa",backgroundColor: "transparent",border:"2px solid #00affa",opacity:"0"},});
    }
    activateManaging(){
        this.setState({ editingStyle:{color: "#00affa",backgroundColor: "transparent",border:"2px solid #00affa",opacity:"0"},managingStyle:{color: "white",backgroundColor: "#00affa",border:"2px solid transparent",opacity:"1"},});

		var cropsPlaced = this.state.cropsPlaced;
		var counts = {};
		for (var i = 0; i < cropsPlaced.length; i++) {
			var cropType = cropsPlaced[i];
			if (!(cropType in counts))
				counts[cropType] = cropsPlaced.filter((v) => (v === cropType)).length;
		}
		
		var amounts = {};
		var times = {};
		for (var i = 0; i < Object.keys(counts).length; i++) {
			var cropType = Object.keys(counts)[i];
			var cropCount = counts[cropType];
			
			this.predictTime(cropType);
			setTimeout(() => {
				var cropTime = this.state.predictAnswer.time;
				times[cropType] = [cropTime - 5, cropTime + 5];
				
				var cropAmountStr = this.state.predictAnswer.amount;
				cropAmountStr = cropAmountStr.substring(0, cropAmountStr.length - 3);
				var amountSplit = cropAmountStr.split("-");
				var minAmount = parseFloat(amountSplit[0]) * cropCount;
				var maxAmount = parseFloat(amountSplit[1]) * cropCount;
				amounts[cropType] = [minAmount, maxAmount];
			}, 500);
		}
       
    }
    render() {
        return (
            <>
               {<Timeline></Timeline>}
               
                
                
                <div style={{position:"absolute",height:"100%",width:"100%",overflowY:"scroll",opacity:this.state.editingStyle.opacity,transition:"0.1s all"}}>{this.state.cropSelects}</div>
                <button onClick={this.activateEditing} className="div button"
                    style={{
                        width: "200px",
                        height: "40px",
                        left: "2%",
                        top: "3%",
                        fontSize: "20px",
                        color: this.state.editingStyle.color,
                        backgroundColor: this.state.editingStyle.backgroundColor,
                        borderRadius: "5px 0px 0px 5px",
                        border:this.state.editingStyle.border,
                    }}
                >
                    <b>Edit Garden</b>
                </button>
                <button onClick={this.activateManaging} className="div button"
                    style={{
                        width: "200px",
                        height: "40px",
                        left: "12.4%",
                        top: "3%",
                        fontSize: "20px",
                        color: this.state.managingStyle.color,
                        backgroundColor: this.state.managingStyle.backgroundColor,
                        borderRadius: "0px 5px 5px 0px",

                        border:this.state.managingStyle.border,
                    }}
                >
                    <b>Manage Garden</b>
                </button>
                
                
                <div onClick={this.placeFruit}>{this.state.soilBlocks}</div>
                
                <div>{this.state.plants}</div>
                <div style={{position:"absolute",width:"2px",height:"100%",left:"75%",top:"0%",backgroundColor:"rgba(0,0,0,0.2)"}}></div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",position:"absolute",width:"25%",height:"8%",left:"75.1%",top:"0%",textAlign:"center",fontSize:"45px"}}>{this.state.editingStyle.opacity=="1"?"Select A Plant":"Plant Yields"}</div>
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
    }


    render() {
        //alert(maxTime);

        var maxTime = 20; // time in days

        //GET THE TIME FOR EACH CROP THAT HAS BEEN PLANTED
        //HOWHOWHOWHOWHOWHOW
        //HOW
        //WHERE IS IT

        //sample data
        var cropTypes = ["Blueberry", "Tomato"];
        var cropTimes = [50, 40];
        var TIMELINE_SIZE = 700; //px
        var dayPx = maxTime/TIMELINE_SIZE; // each day is x px on timeline

        var cropMarkers = [];
        for (var i=0; i<cropTypes.length; i++) {
            cropMarkers.push(
                <CropMarker left={dayPx*cropTimes[i]}></CropMarker>
            )
        }

        return (
            <>
                <hr
                    style={{
                        color:"red",
                    }}

                />
                <CropMarker  left="50%" dayPx={this.dayPx}></CropMarker>
                {cropMarkers}
            </>
        );
    }
}

class CropMarker extends React.Component { // marker that displays grop range in timeline
    constructor(props) {
        super(props);
    }
    render() {
        //alert("PX"+ this.props.dayPx)
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
