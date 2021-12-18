import React from "react";
import {RatingValueType} from "../components/Rating/Rating";

export type AccordionBooleanType = boolean

export type AccordionPropsType ={
    AccTitle: string
    collapsed: AccordionBooleanType
    setCollapsed: ( collapsed: AccordionBooleanType) => void

}
function Accordion(props:AccordionPropsType) {
    debugger
    return (
        <div>
            <AccordionTitle title={props.AccTitle} onClick={()=> {props.setCollapsed(!props.collapsed)}}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    )}


type AccordionTitlePropsType ={
    title: string
    onClick: () => void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    return(
            <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}
export default Accordion;
// function Accordion(props:AccordionPropsType) {
//     if (props.collapsed === true){
//     return (
//         <div>
//             <AccordionTitle title={props.AccTitle} />
//             <AccordionBody AccBody1={props.AccBody1} AccBody2={props.AccBody2}
//             AccBody3={props.AccBody3}/>
//         </div>
//     )}else {
//         return (
//             <div>
//                 <AccordionTitle title={props.AccTitle} />
//             </div>
//             )
//     }
// }