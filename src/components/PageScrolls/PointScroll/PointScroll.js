import React from 'react'
import './PointScroll.css'
import {Link} from "react-scroll";

const PointScroll = (props) => {
        return <div className="pointScroll__box">
            <Link  to="section1"
                   activeClass="active_point"
                   spy={true}
                   smooth={true}
                   duration={1500}
                   offset={-70}
                   onSetActive={props.handleSetActive}
            >
                <div className="pointScroll__item item1">
                </div>
            </Link>
            <Link  to="section2"
                   activeClass="active_point"
                   spy={true}
                   smooth={true}
                   duration={1500}
                   offset={-70}
                   onSetActive={props.handleSetActive}
            >
                <div className="pointScroll__item item2">
                </div>
            </Link>
            <Link  to="section3"
                   activeClass="active_point"
                   spy={true}
                   smooth={true}
                   duration={1500}
                   offset={-70}
                   onSetActive={props.handleSetActive}
            >
                <div className="pointScroll__item item2">
                </div>
            </Link>
        </div>
};

export default PointScroll