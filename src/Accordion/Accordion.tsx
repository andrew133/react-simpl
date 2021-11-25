import React from "react";

function Accordion(props:any) {
    debugger
    return (
        <div>
            <AccordionTitle AccTitle={" "} />
            <AccordionBody />
        </div>
    )
}
function AccordionTitle(props:any) {
    debugger
    return(
            <h3>{props.AccTitle}</h3>
    )
}
function AccordionBody(props:any) {
    debugger
    return (
            <ul>
                <li>{props.AccBady1}</li>
                <li>{props.AccBady2}</li>
                <li>{props.AccBady3}</li>
            </ul>
    )
}
export default Accordion;