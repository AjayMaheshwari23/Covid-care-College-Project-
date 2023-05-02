import 'bootstrap/dist/css/bootstrap.min.css';
import first from '../Images/blogs-4.webp'
import second from '../Images/blogs-7.jpg'
import third from '../Images/blogs-8.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <div>
      <h1 classname="heading"> Our latest <span>Blogs</span> </h1>
        <br></br>
        <br></br>

        <div classname="container">

            <div classname="d-flex justify-content-center flex-wrap">

                <div classname="box p-3 m-2">
                    <div classname="image">
                        <img src={first} classname="w-100 h-100" alt=""/>
                    </div>
                    <div classname="content p-2">
                        <h3>Stay safe -- wear a mask To protect Yourself</h3>
                        <Link to="https://www.cdc.gov/library/researchguides/2019novelcoronavirus/websites.html"
                            target="_blank" classname="link-btn">read more</Link >
                        <div classname="icons">
                            <Link to="#"><i classname="fas fa-user"></i>BY Ajay</Link >
                            <Link to="#"><i classname="fas fa-calendar"></i>JAN 2022</Link >
                        </div>
                    </div>
                </div>

                <div classname="box p-3 m-2">
                    <div classname="image">
                        <img src={second} classname="w-100 h-100" alt=""/>
                    </div>
                    <div classname="content p-2">
                        <h3>Vaccine is our strongest weapon against COVID-19</h3>
                        <Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7160609/" target="_blank"
                            classname="link-btn">read more</Link >
                        <div classname="icons">
                            <Link to="#"><i classname="fas fa-user"></i>BY Mahek</Link >
                            <Link to="#"><i classname="fas fa-calendar"></i>FEB 2022</Link >
                        </div>
                    </div>
                </div>

                <div classname="box p-3 m-2">
                    <div classname="image">
                        <img src={third} classname="w-100 h-100" alt=""/>
                    </div>
                    <div classname="content p-2">
                        <h3>Doctors are the greatest warrior against COVID-19</h3>
                        <Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7350477/" target="_blank"
                            classname="link-btn">read more</Link >
                        <div classname="icons">
                            <Link to="#"><i classname="fas fa-user"></i>BY Devesh</Link >
                            <Link to="#"><i classname="fas fa-calendar"></i>Mar 2022</Link >
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <br></br>
        <br></br>
    </div>

  );
}

export default Blogs;
