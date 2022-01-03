import React from "react";
import {RatingValueType} from "../components/Rating/Rating";


export type AccordionPropsType ={
    AccTitle: string
    collapsed: boolean
    oneChange: () => void

}
function Accordion(props:AccordionPropsType) {
    debugger
    return (
        <div>
            <AccordionTitle title={props.AccTitle}
                            oneChange={props.oneChange}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    )}


type AccordionTitlePropsType ={
    title: string
    oneChange: () => void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    return(
            <h3 onClick={() => props.oneChange()}>{props.title}</h3>
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