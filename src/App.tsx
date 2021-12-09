import React from 'react';
import './App.css';
import Accordion from "./Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";


function App() {
    debugger
    return (
        <div className={"App"}>

            <OnOff />

            <UncontrolledAccordion AccTitle={"Menu"}/>

            <UncontrolledRating />

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