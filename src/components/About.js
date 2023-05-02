import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import about from '../Images/about.jpg';

function About() {
    return (
        <div classname="container-fluid pt-5 pb-5" id="about">
            <h1 classname="heading text-center">About <span>Covid-19</span></h1>
            <br></br>
            <div style={{ display: 'flex'}}>

                <div >
                    <div classname="col-lg-5 col-md-2 col-12"><img alt='covid' width={700} src={about} /></div>

                </div>
                <div><br></br><br></br><br></br><b>
                    <p>
                        Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.Mostpeople infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment.
                    </p>
                    <p>
                        The virus that causes COVID-19 spreads easily among people. Data has shown that the COVID-19 virus spreads mainly from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratdroplets released when someone with the virus coughs, sneezes, breathes, sings or talks. Thdroplets can be inhaled or land in the mouth,
                        nose or eyes of a person nearby.
                    </p>
                    <p>
                        The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.
                    </p>
                    </b>
                </div>
            </div>
        </div>

    );
}

export default About;
