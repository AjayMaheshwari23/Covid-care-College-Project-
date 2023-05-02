import React from 'react'
import { Link } from 'react-router-dom'
import pallavi from '../Images/pallavi.png'
import ajay from '../Images/Ajay.png'
import mahek from '../Images/mahek.png'
import ritesh from '../Images/ritesh.png'
import ashmit from '../Images/ashmit.png'
import devesh from '../Images/devesh.png'
import abhinav from '../Images/abhinav.png'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-3'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/MoHFWIndia/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/mohfw_india' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.worldometers.info/coronavirus/' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/mohfw.gov.in/?hl=en' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://in.linkedin.com/company/ministry-of-health-and-family-welfare-government-of-india' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>


        <section className=''>
          <MDBRow>
            <MDBCol  className='mb-3 mb-md-0'>
              <h5 className='text-uppercase'>Team Members</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href={ajay} className='text-white'>
                    Ajay Maheshwari
                  </a>
                </li>
                <li>
                  <a href={mahek} className='text-white'>
                    Mahek Jain
                  </a>
                </li>
                <li>
                  <a href={pallavi} className='text-white'>
                    Pallavi Bahekar
                  </a>
                </li>
                <li>
                  <a href={ashmit} className='text-white'>
                    Ashmit Raj
                  </a>
                </li>
                <li>
                  <a href={ritesh} className='text-white'>
                    Ritesh Mohan
                  </a>
                </li>
                <li>
                  <a href={devesh} className='text-white'>
                    Devesh Kalodiya
                  </a>
                </li>
                <li>
                  <a href={abhinav}className='text-white'>
                    Kumar Abhinav
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol  className='mb-3 mb-md-0'>
              <h5 className='text-uppercase'>Quick Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='../components/Home.js' className='text-white'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='../components/About.js' className='text-white'>
                    About
                  </a>
                </li>
                <li>
                  <a href='../components/Prevent.js' className='text-white'>
                    Prevent
                  </a>
                </li>
                <li>
                  <a href='../components/Symtoms.js' className='text-white'>
                    Symptoms
                  </a>
                </li>
                <li>
                  <a href='../components/Blogs.js' className='text-white'>
                    Blogs
                  </a>
                </li>
              </ul>
            </MDBCol>


            <MDBCol className='mb-3 mb-md-0'>
              <h5 className='text-uppercase'>Contact Info</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    +123-456-7890
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    +111-222-3333
                  </a>
                </li>
                <li>
                  <a href='file:///C:/Users/adminset/Desktop/project/Sem1-project/junk/technicalquery.covid19@gov.in' className='text-white'>
                    Tecnicalquery.Covid19@gov.in
                  </a>
                </li>
                <li>
                  <a href='https://www.google.com/search?q=new+delhi+&ei=5TU0YuC6Eo6RseMP2YCIsAw&ved=0ahUKEwigwYjbks_2AhWOSGwGHVkAAsYQ4dUDCA4&uact=5&oq=new+delhi+&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBQgAEIAEMgQIABBDMgUIABCABDILCC4QgAQQxwEQrwEyDgguEIAEELEDEMcBEK8BMgQIABBDMgQIABBDMgUIABCABDIECAAQQzoHCAAQRxCwAzoHCAAQsAMQQzoSCC4QxwEQ0QMQyAMQsAMQQxgBOgwILhDIAxCwAxBDGAE6EgguEMcBEK8BEMgDELADEEMYAUoECEEYAEoECEYYAFC6A1jJDWDsEGgBcAF4AIAB4QGIAZoDkgEFMC4xLjGYAQCgAQHIAQzAAQHaAQQIARgI&sclient=gws-wiz' className='text-white'>
                    New Delhi, India - 110004
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

    </MDBFooter>
  );
}