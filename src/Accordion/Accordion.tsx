import React from "react";
type AccordionPropsType ={
    AccTitle: string
    AccBody1: string
    AccBody2: string
    AccBody3: string
    collapsed: boolean
}


function Accordion(props:AccordionPropsType) {
    if (props.collapsed === true){
    return (
        <div>
            <AccordionTitle title={props.AccTitle} />
            <AccordionBody AccBody1={props.AccBody1} AccBody2={props.AccBody2}
            AccBody3={props.AccBody3}/>
        </div>
    )}else {
        return (
            <div>
                <AccordionTitle title={props.AccTitle} />
            </div>
            )
    }
}
type AccordionTitlePropsType ={
    title: string
}
function AccordionTitle(props:AccordionTitlePropsType) {
    debugger
    return(
            <h3>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    AccBody1: string
    AccBody2: string
    AccBody3: string
}
function AccordionBody(props:AccordionBodyPropsType) {
    debugger
    return (
            <ul>
                <li>{props.AccBody1}</li>
                <li>{props.AccBody2}</li>
                <li>{props.AccBody3}</li>
            </ul>
    )
}
export default Accordion;