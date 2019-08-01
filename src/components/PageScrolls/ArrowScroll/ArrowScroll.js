import React from 'react'
import arrowDown from '../../../etc/img/arrowDown.png'
import './ArrowScroll.css'
import {Link} from "react-scroll";

const ArrowScroll = (props) => {
        return <div className="footer__scrollBtnContainer">
            <Link to={props.nextSection}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={1500}
                  offset={-70}
            >
                <span className="text">Листайте вниз</span>
                <div className="arrow"><img alt="scrollDown" src={arrowDown}/></div>
            </Link>
        </div>
};

export default ArrowScroll