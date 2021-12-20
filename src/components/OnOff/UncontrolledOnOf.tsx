import React, {useState} from "react";
import s from './OnOff.module.css';

type OnOffType = {
    //on: boolean
}

function OnOff(props:OnOffType) {

    let [on, seton] = useState(false)


    const onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    };
    const ofStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "1px",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {seton(true)}}>On</div>
            <div style={ofStyle} onClick={() => {seton(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
export default OnOff;