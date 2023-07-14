import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={fruit:["Tomato", "Carrot", "Lettuce", "Cucumber", "Spinach", "Bell Pepper", "Broccoli", "Cabbage", "Onion", "Strawberry", "Potato", "Zucchini", "Green Bean", "Radish", "Watermelon", "Pumpkin", "Sweet Corn", "Cauliflower", "Eggplant", "Cilantro", "Cantaloupe", "Garlic", "Kale", "Peas", "Beetroot", "Raspberry", "Blueberry", "Mint", "Parsley", "Cherry", "Grapes", "Squash", "Artichoke", "Asparagus", "Brussels Sprouts", "Celery", "Collard Greens", "Green Onion", "Honeydew Melon", "Kiwi", "Lima Beans", "Mango", "Peach", "Pear", "Pineapple", "Pomegranate", "Rhubarb", "Tomatillo", "Turnip", "Watercress"],fallingFruit:[]};
        
    }
    componentDidMount(){
        var fallingFruit=[];
        for(let i=0;i<this.state.fruit.length;i++){
            var delay=Math.random() * 10;
            var fallDuration=Math.random()*5+3;
            var spinDuration=Math.random()*3+1;
            fallingFruit.push(<FallingFruit image={this.state.fruit[i]+".png"} left={i*2+"%"} delay={delay+"s"} fallDuration={fallDuration+"s"} spinDuration={spinDuration+"s"}/>)
        }
        this.setState({fallingFruit});
    }
    render(){
        return  <>
                   {this.state.fallingFruit}
                    
                    <div className="div" style={{width:"32%",height:"10%",left:"34%",top:"20%",fontSize:"75px",color:"black"}}><b>UPGRADE YOUR</b></div>
                    <div className="div highlight2" style={{width:"32%",height:"17%",left:"34%",top:"32%",fontSize:"140px",color:"white"}}><b>GARDEN</b></div>
                    <div className="div" style={{width:"40%",left:"30%",top:"55%",fontSize:"30px"}}>We use AI data analysis to manage your garden, preventing hundreds of pounds of food being wasted.</div>
                    <Link className="div button" to="/garden" style={{width:"300px",height:"80px",left:"810px",top:"73%",fontSize:"40px",color:"white",backgroundColor:"#00affa",borderRadius:"5px"}}><b>Explore</b></Link>
                </>
    }
}
class FallingFruit extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return  <>
                    <img className="fallingFruit" src={require('./'+this.props.image)} style={{left:this.props.left,animationDelay:this.props.delay,animation:"fall "+this.props.fallDuration+" linear infinite,spin "+this.props.spinDuration+" linear infinite"}}/>
                </>
    }
}


export {Home}