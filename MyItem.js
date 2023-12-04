
import React from 'react';

class Movies extends React.Component
{
    render(){
        return(
            <li>
                <a>{this.props.url}</a>
            </li>
        )
    }
}

class Item extends React.Component
{
    constructor()
    {
        super()
        this.state={
            swimg:null,
            name:null,
            height:null,
            homeworld:null,
            movies:[],
            loadstate:false,
        }
    }
  
    
    getCharacter(){
        console.log("hello")
        var randomnum= Math.round(Math.random() * 87) + 1
        console.log(randomnum)
        const url=`https://akabab.github.io/starwars-api/api/id/${randomnum}.json`;
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            this.setState({
            
                swimg:data.image,
                name:data.name,
                height:data.height,
                homeworld:data.homeworld,
                movies:data.affiliations,
                loadstate:true,
            })
        })
      
    }


    render(){
        var movies= this.state.movies.map((url,i)=>{
            return <Movies key={i} url={url} />
        })
  
        return(
            
              
            <div>
                {
            this.state.loadstate &&
             <div>
             <img className='swimg' src={this.state.swimg} alt="Logo" />
            <h2>Name:{this.state.name}</h2>
            <p>Height:{this.state.height}</p>
            <p>Homeworld:{this.state.homeworld}</p>
            <ul>
                 {movies}
            </ul>
            </div>
            }
            <button type='button' className='btn' onClick={()=>this.getCharacter()}>Randomize</button>
            </div>
        )
    }
}

export default Item