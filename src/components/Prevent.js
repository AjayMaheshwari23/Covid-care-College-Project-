import React from 'react'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import mask from '../Images/mask.png'
import wash from '../Images/wash.png'
import sd from '../Images/sd.png'
import vax2 from '../Images/vax2.png'
import stay from '../Images/stay.webp'
import clean from '../Images/clean.png'

function Prevent() {
    return (
        <div>
            <h1 class="heading"> <span>Preventions</span> </h1>
            <div class="d-flex flex-wrap justify-content-center">

                <div class="box p-4 m-2" >
                    <img src={mask} alt="" width={100} height={100} />
                    <h3>wear a mask</h3>
                    <p> Wear a properly fitted mask when physical distancing is not possible or when in poorly ventilated settings.</p>
                </div>

                <div class="box p-4 m-2">
                    <img src={wash} alt="" width={100} height={100} />
                    <h3>wash your hands</h3>
                    <p>Wash your hands regularly with soap and water or clean them with alcohol-based hand rub.</p>
                </div>

                <div class="box p-4 m-2">
                    <img src={sd} alt="" width={100} height={100} />
                    <h3>Practice social distancing</h3>
                    <p>Stay at least 1 metre apart from others, even if they don’t appear to be sick.</p>
                </div>

                <div class="box p-4 m-2">
                    <img src={vax2} alt="" width={100} height={100} />
                    <h3>Get Vaccinated</h3>
                    <p>Get vaccinated when a vaccine is available to you.</p>
                </div>

                <div class="box p-4 m-2" >
                    <img src={stay} alt="" width={100} height={100} />
                    <h3>Stay indoors and avoid crowds</h3>
                    <p>Crowded indoor spaces should be avoided. When indoors, increasing the rate of air change, decreasing recirculation of air and increasing the use of outdoor air can reduce transmission.
                    </p>
                </div>

                <div class="box p-4 m-2">
                    <img src={clean} alt="" width={100} height={100} />
                    <h3>clean everyday</h3>
                    <p>Just cleaning surfaces with soap or detergent and not disinfecting is enough to reduce risk of transmission.</p>
                </div>

            </div>
        </div>

    );
}

export default Prevent
