import React from "react";

export function Rating(props:any) {
    debugger
    return (
        <div>
            <Star selected = {props.value > 0}/>
            <Star selected = {props.value > 1}/>
            <Star selected = {props.value > 2}/>
            <Star selected = {props.value > 3}/>
            <Star selected = {props.value > 4}/>
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