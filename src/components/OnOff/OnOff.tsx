import React, {useState} from "react";
import s from './OnOff.module.css';

type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}

function OnOff(props:OnOffType) {


    const onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
    };
    const ofStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "1px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red",
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red",
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
            <div style={ofStyle} onClick={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
export default OnOff;