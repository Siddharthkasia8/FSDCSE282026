import React from 'react'

function ICard(props){
    return (
        <div style={{border:'10px solid black',height:'450px',width:'300px'}}>
            <img src={props.pic} height="15j0" width="100"/>
            <h2>{props.collegeName}</h2>
            <h3>Roll No.= {props.rollNo}</h3>
            <h4> Name: {props.name}</h4>
            <h4> Branch: {props.branch}</h4>
            <h4>Section: {props.section}</h4>

     </div>
    )
}
export default ICard