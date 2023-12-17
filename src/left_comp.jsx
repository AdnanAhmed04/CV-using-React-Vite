
import { useState } from 'react'
import './comp.css'

function Left_side() {

    return (

        <div className=''>
            <h3>Personal Info</h3>
            <ul>
                <li>
                    Male
                </li>
                <li>
                    May 19 1992
                </li>
                <li>
                    123456789
                </li>
                <li>
                    abc@gmail.com
                </li>
                <li>
                    London,UK
                </li>
            </ul>
            <hr></hr>
            <h3>Skills</h3>
            <ul>
                <li>
                    JavaScript
                </li>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    MangoDB
                </li>
                <li>
                    Express JS
                </li>
            </ul>
            <hr></hr>
            <h3>Certificate</h3>
            <ul>
                <li>IBM Full Stack Developer
                </li>
            </ul>
            <hr></hr>
            <h3>Interest</h3>
            <ul>
                <li>Music
                </li>
                <li>Vedio Games
                </li>
                <li>Football
                </li>
            </ul>
        </div>

    )
}

export default Left_side;
