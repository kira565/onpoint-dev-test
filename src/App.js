import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SectionFirst from "./components/section1/SectionFirst";
import SectionSecond from "./components/section2/SectionSecond";
import SectionThird from "./components/section3/SectionThird";
import {Element} from "react-scroll"
import PageScrollsContainer from "./components/PageScrolls/PageScrollsContainer";
import IceCubicParallax from "./components/iceCubic/IceCubicParallax";



const App = () => {
    return <>
        <div className="layout">
            <PageScrollsContainer/>
            <div className="container">
                <Element name="section1" className="element">
                    <SectionFirst/>
                </Element>
                <Element name="section2" className="element">
                    <SectionSecond/>
                </Element>
                <Element name="section3" className="element">
                    <SectionThird/>
                </Element>
            </div>
        </div>
       <IceCubicParallax/>
    </>
};

export default App;
