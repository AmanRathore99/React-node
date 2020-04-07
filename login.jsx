import React, { Component } from 'react';
import AmanCallApi from './../services/call';
import axios from 'axios'

class AmanComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            id : 0
        };
        // define an instancve of HTTP Service
        this.serv = new AmanCallApi();

        this.handleSave = this.handleSave.bind(this);
    }
  
    handleSave(){
        let obj={
            username:this.state.username,
            id: this.state.id

        }
        console.log("enter in login.jsx");
        this.serv.store(obj)
        .then((response)=>{
            console.log(response);
            //console.log(id)
            
        })
    }
    
    render() {
        
        return (
            <div className="container" style={{marginTop:50}}>
                <input type="text" value ={this.state.id} className="form-control" onChange={(evt)=>this.setState({id: evt.target.value})}/>
                <input type="text" value ={this.state.username} className="form-control" onChange={(evt)=>this.setState({username: evt.target.value})}/>
                <input type="button" value="Save" onClick={this.handleSave}/>
            </div>
        )
         
    }
}

export default AmanComponent;