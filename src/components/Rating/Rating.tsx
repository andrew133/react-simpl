import React from "react";

export function Rating(props:any) {
    debugger
    return (
        <div>
            <Star selected ={true}/>
            <Star selected ={true}/>
            <Star selected ={false}/>
            <Star selected ={false}/>
            <Star selected ={false}/>
            <Star selected ={false}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props:StarPropsType) {
    debugger
    if (props.selected === true){
       return <span><b>Star-</b></span>
    } else {
        return <span>Star-</span>
    }
}