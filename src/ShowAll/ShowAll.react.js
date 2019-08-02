import React from 'react';

import './ShowAll.css';



const ShowAll = (props) => {

    return (
        <div>
            
            
                    <div>
                     {
                        props.projectList.map((eachProject,index)=>{
                            return (
                            <div className="col-sm-1" key={index}>
                                
                                    <a href={eachProject.owner.html_url}><img src={eachProject.owner.avatar_url} alt={eachProject.owner.login} width="30" height="30"></img></a>
                                    <p>{eachProject.name}  </p>
                                    
                                    <p>Stars: {eachProject.watchers} </p>
                                   
                                    
                                </div>
                            )
                        })
                    }

                    </div>

                {/* </tbody> */}
            {/* </table> */}
        </div>
    );

}

export default ShowAll;