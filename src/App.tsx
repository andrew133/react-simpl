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
            <Accordion AccTitle={"Menu"} AccBody1={"js"}
                       AccBody2={"css"} AccBody3={"html"} collapsed={true}/>
            <Accordion AccTitle={"User"} AccBody1={"1"} AccBody2={"2"} AccBody3={"3"}
                       collapsed={false}/>
            <Rating value={4}/>
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