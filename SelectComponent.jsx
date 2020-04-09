import React, { Component } from 'react';
class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataSource:[],
        }
    }
    handleChange(evt){
        console.log(evt.target.value);
        this.props.selectedValue(evt.target.value);
    }

    
    render() { 
       
        return ( 
            <div className="container">
              {
                  <select className="form-control" value={this.props.data} onChange={this.handleChange.bind(this)}>
                 {
                     this.props.dataSource.map((d,i) => (
                         <option key={i} value={d}>{d}</option>
                     ))
                 }
                </select> 
            }
            </div>
         );
    }
}
 
export default SelectComponent;