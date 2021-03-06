import React, {useState} from "react";

type AccordionPropsType ={
    AccTitle: string
}
function UncontrolledAccordion(props:AccordionPropsType) {

    let [collapsed, setcollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.AccTitle} onClick ={() => {setcollapsed(!collapsed)}}/>

            {!collapsed && <AccordionBody/>}
        </div>
    )}


type AccordionTitlePropsType ={
    title: string
    onClick: () => void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    return(
            <h3 onClick={() => props.onClick()}>-- {props.title} --</h3>
    )
}


function AccordionBody() {
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
    )
}
export default UncontrolledAccordion;