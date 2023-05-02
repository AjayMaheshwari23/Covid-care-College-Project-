import first from '../Images/aa_ccexpress.png'
import second from '../Images/doctor_ccexpress.png'
import third from '../Images/222_ccexpress.png'
import fourth from '../Images/11111_ccexpress (1).jpeg'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react'
import { Link } from 'react-router-dom'

function Experts() {
  return (
    <div>
      <h1 classname="heading"> Meet our <span>Experts</span> </h1>

        <div classname="container d-flex justify-content-center flex-wrap">

            <div classname="d-flex justify-content-center flex-wrap" style={{ display: 'flex'}}>

                <div classname="box ">
                    <img src={first} alt="" width={300} height={400}/>
                    <h3>Dr. Ajay Maheshwari</h3>
                    <span>Immunologist</span><br></br>
                    <span>(Treate Immune system)</span>
                    <div classname="share">
                        <Link to ="https://www.facebook.com" target="_blank" classname="fab fa-facebook-f"></Link >
                        <Link to ="https://twitter.com" target="_blank" classname="fab fa-twitter"></Link >
                        <Link to ="https://www.instagram.com" target="_blank" classname="fab fa-instagram"></Link >
                        <Link to ="https://www.linkedin.com/in/ajay-maheshwari-36b24b227/" target="_blank"
                            classname="fab fa-linkedin"></Link >
                    </div>
                </div>
                <div classname="box">
                    <img src={second} alt="" width={300} height={400}/>
                    <h3>Dr. Pallavi Bahekar</h3>
                    <span>Cardiologist</span><br></br>
                    <span>(Heart Specalist)</span>
                    <div classname="share">
                        <Link to ="https://www.facebook.com" target="_blank" classname="fab fa-facebook-f"></Link >
                        <Link to ="https://twitter.com" target="_blank" classname="fab fa-twitter"></Link >
                        <Link to ="https://www.instagram.com" target="_blank" classname="fab fa-instagram"></Link >
                        <Link to ="https://in.linkedin.com/" target="_blank" classname="fab fa-linkedin"></Link >
                    </div>
                </div>

                <div classname="box">
                    <img src={third} alt="" width={300} height={400}/>
                    <h3>Dr. Devesh Kailodiya</h3>
                    <span>Special Surgen</span>
                    <div classname="share">
                        <Link to ="https://www.facebook.com" target="_blank" classname="fab fa-facebook-f"></Link >
                        <Link to ="https://twitter.com" target="_blank" classname="fab fa-twitter"></Link >
                        <Link to ="https://www.instagram.com" target="_blank" classname="fab fa-instagram"></Link >
                        <Link to ="https://in.linkedin.com/" target="_blank" classname="fab fa-linkedin"></Link >
                    </div>
                </div>

                <div classname="box">
                    <img src={fourth} alt="" width={300} height={400}/>
                    <h3>Dr. Ashmit Raj</h3>
                    <span>Virus expert</span><br></br>
                    <span>(Special Doctor)</span><br></br>
                    <div classname="share">
                        <Link to ="https://www.facebook.com" target="_blank" classname="fab fa-facebook-f"></Link >
                        <Link to ="https://twitter.com" target="_blank" classname="fab fa-twitter"></Link >
                        <Link to ="https://www.instagram.com" target="_blank" classname="fab fa-instagram"></Link >
                        <Link to ="https://in.linkedin.com/" target="_blank" classname="fab fa-linkedin"></Link >
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Experts;
