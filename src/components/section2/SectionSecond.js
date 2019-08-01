import React from 'react'
import styles from '../Sections.module.css'
import './SectionSecond.css'

const SectionSecond = () => {
    return <div className={`${styles.section} ${styles.section__second}`}>
        <div className="row head__space">
        </div>
        <div className="row text__area">
            <div className="col-md-8 offset-2 text__area_textBox">
                <span className="text__area_text"><h1>Основа терапии —<br/> патогенез СД2</h1></span>
            </div>
        </div>
        <div className="row footer__space">
        </div>
    </div>
};

export default SectionSecond