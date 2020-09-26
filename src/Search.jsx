import React,{Component} from 'react';
import './search.scss';
import axios from 'axios';
import ImageResults from './imageResult';


class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api/',
        apiKey:'18464300-c1fbe9ef80694337ece912013',
        images:[]
    };
    onTextChange = e => {
        const val = e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
        {
            this.setState({images:[]});
        }
        else{
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
        }
       
        }) ;
    }
    render(){
        console.log(this.state.images);
        return(
            <div className="search_image">
                <input type="text"
                placeholder="Search for images"
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange} 
                />
                {this.state.images.length>0 ? (<ImageResults images={this.state.images}/>):null}
            </div>
        )
    }
     
}

export default Search;