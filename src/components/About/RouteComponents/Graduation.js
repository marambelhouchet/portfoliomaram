import React from 'react';

import '../../../styles/About/Route/Graduation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">G<span>raduation</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>Baccalauréat in Experimental Sciences</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;26/06/2022</h2>
                        <p>
                            Graduated with honors (Très Bien). 
                        </p>
                        <h1>University Student</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;15/09/2022 -present</h2>
                        <p>
                        Currently a third-year student at ISAMM Manouba, specializing in Big Data and Data Analytics.
                
                        </p>
                       </div>
                </div>
            </div>
        </>
    );
}

export default Graduation;
