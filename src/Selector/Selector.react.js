import React from 'react';

import './Selector.css';
import FetchProjects from '../FetchProjects/FetchProjects.react';

class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            apiURL:''
        };
        this.doAll=this.doAll.bind(this);
        this.doRuby=this.doRuby.bind(this);
    }
    doAll=()=>{
        this.setState(state=>({apiURL:"https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30"}));
        this.forceUpdate();
    }
    doRuby=()=>{
        this.setState(state=>({apiURL:"https://api.github.com/search/repositories?q=language:Ruby&sort=stars&per_page=30"}));
        this.forceUpdate();
    }
  
    componentDidUpdate(){
        console.log("Did Update called");
        
    }

    render() {
        return (
            <div className='selector_wrapper'>
                <form className="button_menu">
                    <button onClick={this.doAll}>All</button>
                    <button onClick={this.doRuby}>
                        Ruby
                    </button>
                    <p>{this.state.apiURL}</p>
                    <FetchProjects argURL={this.state.apiURL}></FetchProjects>
                </form>
            </div>
        );
    }
}

export default Selector;