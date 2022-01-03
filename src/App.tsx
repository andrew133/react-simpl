import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import Accordion from "./Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOf";




function App() {

    let [ratingValue, setratingValue] = useState<RatingValueType>(0)
    let [acardionCollapsed, setAcardionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);


    return (
        <div className={"App"}>

            <Accordion AccTitle={"Menu"}
                       collapsed={acardionCollapsed}
                       oneChange={()=> setAcardionCollapsed(!acardionCollapsed)}/>

            <UncontrolledOnOff onChange = {setSwitchOn}/> {switchOn.toString()}

            {/*<OnOff on={switchOn} onChange={setswitchOn}/>*/}

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