
import { useState } from 'react'
import './comp.css'

function Right_side() {

    return (

        <div className='white-bg'>
            <h3 className='white-bg'>Education</h3>
            <ul className='white-bg'>
                <li className='white-bg'>
                    TOPCV University <span className='white-bg'>&nbsp;&nbsp;</span><i className='white-bg'>(GPA : 3.4)</i>
                </li>
                <li className='white-bg'>
                    TOPCV School<span className='white-bg'>&nbsp;&nbsp;</span><i className='white-bg'>(Passed with A*)    </i>
                </li>

            </ul>
            <hr></hr>
            <h3 className='white-bg'>Work Experience</h3>
            <ul className='white-bg'><li className='white-bg'>TOPCV JSC ( Digital Marketing <span className='white-bg'>&nbsp;&nbsp;</span><i className='white-bg'>2015-2016</i> )</li></ul>
            <ul className='white-bg'><li className='white-bg'>TOPCV SHOP ( Sales Man <span className='white-bg'>&nbsp;&nbsp;</span><i className='white-bg'>2016-2017</i> )</li></ul>
            <hr></hr>
            <h3 className='white-bg'>Activities</h3>
            <ul className='white-bg'>
                <li className='white-bg'>TOPCV-Education Talk 2014</li>
                <li className='white-bg'>TOPCV-Higher Education Talk 2015</li>
                <li className='white-bg'>
                    Oranize monthly events , network with alumni.
                </li>
                <li className='white-bg'>
                    Share how to hunt scholarships and US student's life experences.
                </li>
            </ul>
        </div>

    )
}

export default Right_side;
