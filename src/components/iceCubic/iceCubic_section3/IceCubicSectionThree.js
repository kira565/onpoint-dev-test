import React from 'react'
import iceCopy7 from '../../../etc/img/icebergParallax/sec3/ice copy 7.png'
import iceCopy8 from '../../../etc/img/icebergParallax/sec3/ice copy 8.png'
import iceCopy9 from '../../../etc/img/icebergParallax/sec3/ice copy 9.png'

const IceCubicSectionThree = () => {
    return <div className="iceberg__layer_sec3">
        <div className="row sec3__rows sec3__firstRow_iceberg">
            <div className="sec3__firstRow__iceberg_iceberg1 image_iceberg"><img alt="ice" src={iceCopy7}/></div>
        </div>
        <div className="row sec3__rows sec3__secondRow_iceberg">
            <div className="sec3__secondRow__iceberg_iceberg1 image_iceberg"><img alt="ice" src={iceCopy9}/></div>
        </div>
        <div className="row sec3__rows sec3__thirdRow_iceberg">
            <div className="sec3__thirdRow__iceberg_iceberg1 image_iceberg"><img alt="ice" src={iceCopy8}/></div>
        </div>
    </div>
};

export default IceCubicSectionThree