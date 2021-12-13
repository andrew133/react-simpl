import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueTape} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import Accordion from "./Accordion/Accordion";



function App() {

    let [ratingValue, setratingValue] = useState<RatingValueTape>(0)


    return (
        <div className={"App"}>

            <Accordion AccTitle={"Menu"} collapsed={false}/>


            {/*<OnOff />*/}
            <Rating value = {ratingValue} onClick = {setratingValue} />
            {/*<UncontrolledAccordion AccTitle={"Menu"}/>*/}

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