import React from 'react'
import ArrowScroll from "./ArrowScroll/ArrowScroll";
import PointScroll from "./PointScroll/PointScroll";

class PageScrollsContainer extends React.Component {
    state = {
        next: 'section1'
    };
    handleSetActive = (to) =>{
        if ( to === 'section1'){
            this.setState({next:'section2'})
        }else if (to === 'section2'){
            this.setState({next: 'section3'})
        }else if (to === 'section3'){
            this.setState({next: 'hide'})
        }

    };

    render() {
        const {next} = this.state;
        return <>
            {next !== 'hide' && <ArrowScroll nextSection={next}/>}
            <PointScroll handleSetActive={this.handleSetActive}/>
        </>
    }
}

export default PageScrollsContainer