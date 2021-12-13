import React from "react";
type AccordionPropsType ={
    AccTitle: string
    collapsed: boolean
}
function Accordion(props:AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.AccTitle} />
            {!props.collapsed && <AccordionBody />}
        </div>
    )}


type AccordionTitlePropsType ={
    title: string
}
function AccordionTitle(props:AccordionTitlePropsType) {
    debugger
    return(
            <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    debugger
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