import React from 'react';
import './App.css';
import Accordion from "./Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    debugger
    return (
        <div>
            <PageTitle title ={"This is component"} />
            <Rating value={3}/>
            <PageTitle title ={"My friend"} />
            <Accordion AccTitle={"Menu"} AccBady1={"js"}
                       AccBady2={"css"} AccBady3={"html"}/>
            <Rating value={4}/>
        </div>
    )
}
function PageTitle(props:any) {
    return <h1>{props.title}</h1>
}

    export default App;