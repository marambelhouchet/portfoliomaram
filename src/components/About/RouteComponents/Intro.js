import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span>Maram Belhouchet</span></p>
                        <p data-aos='fade-right' data-aos-delay='200'>I enjoy building websites and always enthusiastic about creating new Android mobile applications.</p>
                        <p data-aos='fade-right' data-aos-delay='400'>Passionate Fullstack developer.</p>
                        <p data-aos='fade-right' data-aos-delay='600'>I also Develop and maintain data pipelines using Apache Hadoop and Spark.</p>
                        <p data-aos='fade-right' data-aos-delay='800'>I Conduct data analysis and building predictive models using Python and Jupyter Notebook.</p>

                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro