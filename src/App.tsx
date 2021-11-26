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
        <div>
            {/*<PageTitle title ={"This is component"} />*/}
            {/*<PageTitle title ={"My friend"} />*/}
            {/*<Accordion AccTitle={"Menu"} AccBody1={"js"}*/}
            {/*           AccBody2={"css"} AccBody3={"html"} collapsed={true}/>*/}
            {/*<Accordion AccTitle={"User"} AccBody1={"1"} AccBody2={"2"} AccBody3={"3"}*/}
            {/*           collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff />
            <OnOff />
            <OnOff />
            <UncontrolledAccordion AccTitle={"Menu"}/>
           <UncontrolledAccordion AccTitle={"User"}/>
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