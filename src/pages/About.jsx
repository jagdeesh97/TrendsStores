import React from 'react';
import a6 from "../assets/images/about/a6.jpg";
import { Link } from 'react-router-dom';
import vid from '../assets/images/about/1.mp4';
import img1 from '../assets/images/blog/blog-1.jpg';
import img2 from '../assets/images/blog/blog-2.jpg';
import img3 from '../assets/images/blog/blog-3.jpg';
import img4 from '../assets/images/blog/blog-4.jpg';
import Hero from '../components/Hero';
import Marquee from "react-fast-marquee";


const About = () => {
  return <>
    <section className='about-wrapper p-5 mb-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='text-center'>
            <h1 className='text-white'>#Know to Know Us</h1>
            <p className='text-white fs-5'>Take a moment to know us better...</p>
          </div>
        </div>
      </div>
    </section>

    <section className='know-us p-5 mb-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='d-flex'>
            <div className='col-6'>
              <img src={a6} alt='' className='img-fluid p-3' />
            </div>
            <div className='col-6 d-flex flex-column text-center justify-content-center p-3'>
              <div className='mb-3'>
                <h1 className='text-center '>Who are we?</h1>
              </div>
              <div className='mb-3'>
                <p>There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of text.
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </p><br />
                <p> If you are going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of text.
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </p>
              </div>
              <div className='mt-5'>
                <Link className='fs-3' to={'/contact'}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='download p-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='mb-4'>
              <h2 className='text-center'>Download Our <Link className='fs-3'><b>App</b></Link></h2>
            </div>
            <div className='col-6 mb-3'>
              <video loop autoPlay muted src={vid}></video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='blogs p-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='text-center mb-4'>
            <h1>What Our Customers Say...</h1>
            <p>Get to know what our trusted customers say.</p>
          </div>
          <div className='card col-6 d-flex blog-details-page mb-3'>
            <div className='p-4 d-flex'>
              <div className='col-4'>
                <img src={img1} alt='' className='img-fluid  p-4' />
              </div>
              <div className='card-body col-8 p-4'>
                <span><b>Marvel Clein</b></span>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div className='card col-6 d-flex blog-details-page mb-3'>
            <div className='p-4 d-flex'>
              <div className='col-4'>
                <img src={img2} alt='' className='img-fluid  p-4' />
              </div>
              <div className='card-body col-8 p-4'>
                <span><b>Jessis joe</b></span>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div className='card col-6 d-flex blog-details-page mb-3'>
            <div className='p-4 d-flex'>
              <div className='col-4'>
                <img src={img3} alt='' className='img-fluid  p-4' />
              </div>
              <div className='card-body col-8 p-4'>
                <span><b>John doe</b></span>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div className='card col-6 d-flex blog-details-page mb-3'>
            <div className='p-4 d-flex'>
              <div className='col-4'>
                <img src={img4} alt='' className='img-fluid  p-4' />
              </div>
              <div className='card-body col-8 p-4'>
                <span><b>Osama nack</b></span>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div className='card col-6 d-flex blog-details-page mb-3'>
            <div className='p-4 d-flex'>
              <div className='col-4'>
                <img src={img1} alt='' className='img-fluid  p-4' />
              </div>
              <div className='card-body col-8 p-4'>
                <span><b>Nackline</b></span>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div className='card col-6 d-flex blog-details-page mb-3'>
            <div className='p-4 d-flex'>
              <div className='col-4'>
                <img src={img3} alt='' className='img-fluid  p-4' />
              </div>
              <div className='card-body col-8 p-4'>
                <span><b>Bthress</b></span>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='marquee p-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 p-3'>
            <Marquee><Hero/></Marquee>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default About;