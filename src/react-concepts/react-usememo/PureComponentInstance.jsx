import React,{ Component } from "react";
export default class PureComponentClassInstance extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:"Srivatsava"
        }
    }
    render(){
        console.log("name is ",this.state.name);
        return(
            <div>
                <button onClick={()=>this.setState({name:"Chathan"})}>Change Name</button>
            </div>
        )
    }
}