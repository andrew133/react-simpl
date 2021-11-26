import React, {useState} from "react";

type AccordionPropsType ={
    AccTitle: string
}
function UncontrolledAccordion(props:AccordionPropsType) {

    let [collapsed, setcollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.AccTitle} />
            <button onClick ={() => {setcollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )}


type AccordionTitlePropsType ={
    title: string
}
function AccordionTitle(props:AccordionTitlePropsType) {
    debugger
    return(
            <h3>-- {props.title} --</h3>
    )
}


function AccordionBody() {
    debugger
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
    )
}
export default UncontrolledAccordion;