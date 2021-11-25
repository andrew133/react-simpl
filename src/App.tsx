import React from 'react';
import './App.css';

function App() {
    debugger
    return (
        <div>
            This is component
            <Rating/>
            <Accordion/>
        </div>
    )
}
    function Rating() {
        debugger
        return (
            <div>
                <Star />
            </div>
        )
    }

    function Star() {
        debugger
        return(
            <div>
                <div>Star</div>
                <div>Star</div>
                <div>Star</div>
                <div>Star</div>
                <div>Star</div>
                <div>Star</div>
            </div>
        )
    }

    function Accordion() {
        debugger
        return (
            <div>
                <AccordionTitle />
                <AccordionBody />
            </div>
        )
    }
    function AccordionTitle() {
        debugger
    return(
        <div>
            <h3>Menu</h3>
        </div>
    )
    }
    function AccordionBody() {
    debugger
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }

    export default App;