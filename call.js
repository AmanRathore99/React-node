import axios from 'axios' ; 

class AmanCallApi{
    constructor(){
        this.url="http://localhost:6070"
    }


    //Store UserName
    store(obj){
        let response = axios.post(`${this.url}/api/obj`, obj)
        console.log(`http ${response}`);
        //console.log(response);
        
        return response;
    }
}

export default AmanCallApi;