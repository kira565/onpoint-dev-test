import React from 'react'
import styles from '../Sections.module.css'
import '../SectionMedia.css'
import './SectionFirst.css'

const SectionFirst = () => {
    return <div className={`${styles.section} ${styles.section__one}`}>
        <section className="header">
            <div className="row  header__title">
                <div className="col-md-10 col-sm-12 header__title_text"><h1>Всегда ли цели терапии СД2<br/> на
                    поверхности?</h1></div>
            </div>
        </section>
        <section className="mountains">
            <div className="row firstRow">
                <div className="d-block col-md-4 offset-7 d-md-flex mountains__pointBox pointBox_big">
                    <div className="pointBox__circle">
                        <div className="pointBox__circle_elem">
                        </div>
                    </div>
                    <div className="pointBox__text">Цель по HbA1c</div>
                </div>
            </div>
            <div className="row secondRow">
                <div className="d-block col-md-5 offset-4 d-md-flex mountains__pointBox pointBox_big">
                    <div className="pointBox__circle">
                        <div className="pointBox__circle_elem">
                        </div>
                    </div>
                    <div className="pointBox__text">Гипогликемия</div>
                </div>
            </div>
            <div className="row thirdRow">
                <div className="col-md-4 offset-5 d-md-flex mountains__pointBox pointBox_small">
                    <div className="pointBox__circle box_small">
                        <div className="pointBox__circle_elem circle_small">
                        </div>
                    </div>
                    <div className="pointBox__text">Осложнения СД</div>
                </div>
                <div className="col-md-3 d-md-flex mountains__pointBox pointBox_small">
                    <div className="pointBox__circle box_small">
                        <div className="pointBox__circle_elem circle_small">
                        </div>
                    </div>
                    <div className="pointBox__text">СС риски</div>
                </div>
            </div>
        </section>
    </div>
};

export default SectionFirst