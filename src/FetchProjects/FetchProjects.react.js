import React from 'react';

import './FetchProjects.css';

import DisplayAll from '../DisplayAll/DisplayAll.react';

class FetchProjects extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
            url:"https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30"
            };
    }
componentDidMount(){
    
}
handleAll =()=>{
    this.setState({url:"https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30"});
    this.forceUpdate();
    console.log("Fetch All");
}


handleRuby =()=>{
    this.setState({url:"https://api.github.com/search/repositories?q=language:Ruby&sort=stars&per_page=30"});
    console.log("Fetch Ruby");
    this.forceUpdate();
}
handleJava =()=>{
    this.setState({url:"https://api.github.com/search/repositories?q=language:Java&sort=stars&per_page=30"});
    console.log("Fetch Ruby");
    this.forceUpdate();
}
handleJavaScript =()=>{
    this.setState({url:"https://api.github.com/search/repositories?q=language:JavaScript&sort=stars&per_page=30"});
    console.log("Fetch Ruby");
    this.forceUpdate();
}
handlePython =()=>{
    this.setState({url:"https://api.github.com/search/repositories?q=language:Python&sort=stars&per_page=30"});
    console.log("Fetch Ruby");
    this.forceUpdate();
}
handleC =()=>{
    this.setState({url:"https://api.github.com/search/repositories?q=language:c&sort=stars&per_page=30"});
    console.log("Fetch Ruby");
    this.forceUpdate();
}
handleCpp =()=>{
    this.setState({url:"https://api.github.com/search/repositories?q=language:cpp&sort=stars&per_page=30"});
    console.log("Fetch Ruby");
    this.forceUpdate();
}

componentDidUpdate(){
    
}
shouldComponentUpdate(props,state){
    
    this.forceUpdate();
    return true;
}



    render() {
        
        return(
            
            <div className="fetchprojects_wrapper">
                <div className="jumbotron text-center">
                    
                </div>
                <div className="navigation">
                
                    
                    <button onClick={this.handleAll} className="btn btn-primary btn-md">All</button>
                    <button onClick={this.handleRuby} className="btn btn-primary btn-md">Ruby</button>
                    <button onClick={this.handleJava} className="btn btn-primary btn-md">Java</button>
                    <button onClick={this.handleJavaScript} className="btn btn-primary btn-md">JavaScript</button>
                    <button onClick={this.handlePython} className="btn btn-primary btn-md">Python</button>
                    <button onClick={this.handleCpp} className="btn btn-primary btn-md">C++</button>
                    <button onClick={this.handleC} className="btn btn-primary btn-md">C</button>
                
                </div>
                <p><br></br> </p>
                <DisplayAll addr={this.state.url}></DisplayAll>
            </div>
        );

       
    }
}

export default FetchProjects;