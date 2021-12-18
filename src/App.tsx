import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import Accordion, {AccordionBooleanType} from "./Accordion/Accordion";



function App() {

    let [ratingValue, setratingValue] = useState<RatingValueType>(0)
    let [acardionCollapsed, setAcardionCollapsed] = useState<AccordionBooleanType>(false)


    return (
        <div className={"App"}>

            <Accordion AccTitle={"Menu"} collapsed={acardionCollapsed} setCollapsed={setAcardionCollapsed}/>


            {/*<OnOff />*/}
            {/*<Rating value = {ratingValue} onClick = {setratingValue} />*/}
            {/*<UncontrolledAccordion AccTitle={"Menu"}/>*/}

            {/*<UncontrolledRating />*/}

        </div>
    )
}
type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

    export default App;