import React from 'react'
import styles from '../Sections.module.css'
import './SectionThird.css'
import SvgJsxScheme from "../SchemaSVG/SvgJsxScheme";

const SectionThird = () => {
    return <div className={`${styles.section} ${styles.section__third}`}>
        <div className="row space__head_s3">

        </div>
        <div className="row header__title_s3">
            <div className="col-md-5">
                <span className="header__text_s3"><h2>Звенья патогенеза СД2</h2></span>
            </div>
        </div>
        <div className="row table_s3">
            <SvgJsxScheme/>
        </div>
        <div className="row space__footer_s3">

        </div>
    </div>
};

export default SectionThird