import React, { Component } from 'react';
import AmanCallApi from './../services/call';
import axios from 'axios'

import SelectComponent from './../SelectComponent/SelectComponent'
import DropdownData, { Item } from './../DropdownData/DropdownData'
import { json } from 'body-parser';

class AmanComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            mail : '',
            contact : '',
            address : '',
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
            mail : this.state.mail,
            contact: this.state.contact,
            address : this.state.address,
            item:this.state.Item
            //id: this.state.id
            //Item : this.state.Item,
            

        }
        console.log("enter in login.jsx");
        this.serv.store(obj)
        .then((response)=>{
            console.log(response);
            //console.log(Item)
            
        })
    }  
    
    getSelectedItem(val) {
        console.log(`Vaule Received from SelectComponent ${val}`);
         this.setState({Item : val})
           //console.log(Item);
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

                <div className="form-group">
                 <label>Name</label><br/> 
                <input type="text"  value ={this.state.username} className="form-control" onChange={(evt)=>this.setState({username: evt.target.value})}/>
                </div>
           {/* </div> <input type = "checkbox" value = > */}

           <div className="form-group">
                 <label>Email</label><br/> 
                <input type="text"  value ={this.state.mail} className="form-control" onChange={(evt)=>this.setState({mail: evt.target.value})}/>
          </div>

          <div className="form-group">
                 <label>Contact</label><br/> 
                <input type="text"  value ={this.state.contact} className="form-control" onChange={(evt)=>this.setState({contact: evt.target.value})}/>
           </div>

           <div className="form-group">
                 <label>Address</label><br/> 
                <input type="text"  value ={this.state.address} className="form-control" onChange={(evt)=>this.setState({address: evt.target.value})}/>
                </div>
                <div className="form-group">
                 <label>Items</label>
                 <SelectComponent name = "item" value = {this.state.Item} data  = {this.state.Item} selectedValue={this.getSelectedItem.bind(this)} dataSource = {this.state.item} > </SelectComponent>
               </div>  
                <input type="button" value="Submit"  onClick={this.handleSave}/>
            </div>
        )
         
    }
}

export default AmanComponent;
