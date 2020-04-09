import React, { Component } from 'react';
import AmanCallApi from './../services/call';
import axios from 'axios'

import SelectComponent from './../SelectComponent/SelectComponent'
import DropdownData, { Item } from './../DropdownData/DropdownData'

class AmanComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            //id : 0
            Item: '',
            item:Item
             
            
        };
        // define an instancve of HTTP Service
        this.serv = new AmanCallApi();

        this.handleSave = this.handleSave.bind(this);
    }
  
    handleSave(){
        let obj={
            username:this.state.username,
            item: JSON.stringify(this.state.item)
            //id: this.state.id

        }
        console.log("enter in login.jsx");
        this.serv.store(obj)
        .then((response)=>{
            console.log(response);
            //console.log(id)
            
        })
    }
    getSelectedItem(val) {
        console.log(`Vaule Received from SelectComponent ${val}`);
         this.setState({Item: val})
           // onChange={(evt)=>this.setState({Item: evt.target.value})}
    }
    // getSelectedItem(val) {
    //     console.log(`Vaule Received from SelectComponent ${val}`);
    //     this.setState({Item: val}
    //     }    
    render() {
        
        return (
            <div className="container" style={{marginTop:50}}>
                {/* <input type="text" value ={this.state.id} className="form-control" onChange={(evt)=>this.setState({id: evt.target.value})}/> */}
                <input type="text" value ={this.state.username} className="form-control" onChange={(evt)=>this.setState({username: evt.target.value})}/>
                <div className="form-group">
                 <label>Items</label>
                 <SelectComponent name = "Item" value = {this.state.Item} selectedValue={this.getSelectedItem.bind(this)} dataSource = {this.state.item} > </SelectComponent>
               </div>  
                <input type="button" value="Save" onClick={this.handleSave}/>
            </div>
        )
         
    }
}

export default AmanComponent;
