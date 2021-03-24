import React from "react";
import ReactDOM from "react-dom";
import { newImage1, newImage2, newImage3 } from "./randomImage";

class App extends React.Component {    

    constructor(props) {
        super(props);
        this.state = {        
            image1: newImage1(),
            image2: newImage2(),
            image3: newImage3()             
        };        
    }


    render() {
        
        return(<div>            
            {this.state.image1}
            {this.state.image2}
            {this.state.image3}
        </div>)
    }
    
}

ReactDOM.render(<App/>, document.getElementById("root"))