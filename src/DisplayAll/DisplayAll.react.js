import React from 'react';

import './DisplayAll.css';
import ShowAll from '../ShowAll/ShowAll.react';

class DisplayAll extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            response:[],
            loaded: false
            // url:{this.props.addr}
        }
    }
    componentDidUpdate(props,state){
        // console.log(this.state.response);
        console.log("Component updated");
        
        
    }
    componentDidMount(){
        fetch(this.props.addr).then(resp=>resp.json()).then(response=>{this.setState({response:response.items,loaded:true});
        
            }
        );
        console.log("Component Mount");
    }
    shouldComponentUpdate(props,state){
        console.log(props.addr)
        fetch(props.addr).then(resp=>resp.json()).then(response=>{state.response = response.items;
        console.log(state.response);
        console.log("Fetch");
        this.forceUpdate();
        this.render();
            }
        );
        
        return true;
    }
    render() {
        if(!this.state.loaded){
            return (
                <div className='displayall_wrapper'>
                    <p>
                        Loading!!!
                    </p>
                </div>
            );
        }
        else{
            return (
                <div className='displayall_wrapper'>
                    <ShowAll projectList={this.state.response}></ShowAll>
                    <p>
                        {this.props.addr}
                    </p>
                </div>
            );
        }
    }
}

export default DisplayAll;