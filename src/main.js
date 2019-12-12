import React,{Component} from 'react';
import axios from '../src/axios';
import Fullpost from './Fullpost';

class Main extends Component{
state={
    posts:[],
    selectedpost:null,
    error:false
}

    componentDidMount () {
        axios.get('/posts')
        .then(response =>{
            const posts = response.data.slice(0,4);
            const updatedposts = posts.map(post =>{
                return{
                    ...post,authour:"kk"
                }
            });
            this.setState({posts : updatedposts});
           // console.log(response);
        }).catch(error => {
            console.log(error);
            this.setState({error:true});
        })
    }

    postHandler = (id) =>{
        this.setState({selectedpost:id});
    }
    render(){
        let posts = <p>Something went wrong</p>
        if(!this.state.error){
         posts = this.state.posts.map(post => {
            return <div> <button  onClick={() =>this.postHandler(post.id)}>click here</button><p >{post.title} {post.authour} {post.id}</p></div>
        })
    }
        return(
            <div>
                <h1>main</h1>
            {posts}
    <section>
        <Fullpost id={this.state.selectedpost}/>
    </section>
            </div>
        )
    };
}

export default Main