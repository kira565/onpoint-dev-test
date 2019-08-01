import React from 'react'
import {Parallax} from 'react-scroll-parallax'
import './IceCubicSectionTwo.css'
import iceCopy3 from '../../../etc/img/icebergParallax/sec2/ice copy 3.png'
import iceCopy6 from '../../../etc/img/icebergParallax/sec2/ice copy 6.png'
import iceCopy4 from '../../../etc/img/icebergParallax/sec2/ice copy 4.png'
import iceCopy5 from '../../../etc/img/icebergParallax/sec2/ice copy 5.png'

const ParallaxImage = (props) => {
    return <Parallax y={[150, -50]}>
        <img alt="ice" src={props.src}/>
    </Parallax>
};

const IceCubicSectionTwo = () => {
    return <div className="iceberg__layer_sec2">
        <div className="row sec2__rows sec2__firstRow_iceberg">
            <div className="sec2__firstRow__iceberg_iceberg1 image_iceberg"><ParallaxImage src={iceCopy6}/></div>
            <div className="sec2__firstRow__iceberg_iceberg2 image_iceberg"><ParallaxImage src={iceCopy3}/></div>
        </div>
        <div className="row sec2__rows sec2__secondRow_iceberg">
            <div className="sec2__secondRow__iceberg_iceberg1 image_iceberg"><ParallaxImage src={iceCopy5}/></div>
            <div className="sec2__secondRow__iceberg_iceberg2 image_iceberg"><ParallaxImage src={iceCopy4}/></div>
        </div>
    </div>

};

export default IceCubicSectionTwo