import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from "./App";

class AppContainer extends React.Component {
    render(){
        return <ParallaxProvider scrollAxis="vertical">
            <App/>
        </ParallaxProvider>
    }

}

export default AppContainer