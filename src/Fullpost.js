import React,{Component} from 'react';
import Axios from './axios';

class Fullpost extends Component{
state={
    loadedpost:null
}

componentDidUpdate(){
    if(this.props.id){
        if(!this.state.loadedpost || (this.state.loadedpost && this.state.loadedpost.id !== this.props.id)){
            Axios.get('/posts/' + this.props.id)
            .then(response => {
                this.setState({loadedpost: response.data});
                console.log(response);
            });
        }
       
    }
}

    render(){
        let post = <p>please select one</p>
        if(this.props.id){
             post = <p>Loading...</p>

            console.log(this.props.id);}
            if(this.state.loadedpost){

         post =(  <div>
            <h1>{this.state.loadedpost.title}</h1>
            <p>{this.state.loadedpost.id}</p>
        </div>
          )
        }
        return post;
    }
    }

export default Fullpost;