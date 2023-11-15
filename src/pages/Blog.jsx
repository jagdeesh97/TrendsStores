import React from 'react'
import img1 from '../assets/images/blog/b1.jpg';
import img2 from '../assets/images/blog/b5.jpg';
import img3 from '../assets/images/blog/b3.jpg';
import img4 from '../assets/images/blog/b4.jpg';

const Blog = () => {
  return <>
    <section className='blog-wrapper p-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='text-center'>
            <h1 className=' text-white mb-3'>#Read More</h1>
            <p className=' text-white fs-3'>Get to know what our trusted customers say...</p>
          </div>
        </div>
      </div>
    </section>

    <section className='blog-details p-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='text-center'>
            <h1 className='fs-2 mb-3'>Explore more in our library</h1>
            <p>Why we have trending Outfits Everywhere</p>
          </div>
          <div className='card d-flex blog-details-page mb-3'>
            <div className='p-4 d-flex'>
              <div className='col-4'>
                <img src={img1} alt='' className='img-fluid img-rounded-start p-4' />
              </div>
              <div className='card-body col-8 p-4'>
                <span><b>Marvel Clein</b></span>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <p className='mt-4'>Last Updated: Now</p>
              </div>
            </div>
          </div>
          <div className='card d-flex blog-details-page mb-3'>
            <div className='p-4 d-flex'>
              <div className='col-4'>
                <img src={img2} alt='' className='img-fluid img-rounded-start p-4' />
              </div>
              <div className='card-body col-8 p-4'>
                <span><b>Aisha jain</b></span>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <p className='mt-4'>Last Updated: Now</p>
              </div>
            </div>
          </div>
          <div className='card d-flex blog-details-page mb-3'>
            <div className='p-4 d-flex'>
              <div className='col-4'>
                <img src={img3} alt='' className='img-fluid img-rounded-start p-4' />
              </div>
              <div className='card-body col-8 p-4'>
                <span><b>Jacqline Quin</b></span>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <p className='mt-4'>Last Updated: Now</p>
              </div>
            </div>
          </div>
          <div className='card d-flex blog-details-page mb-3'>
            <div className='p-4 d-flex'>
              <div className='col-4'>
                <img src={img4} alt='' className='img-fluid img-rounded-start p-4' />
              </div>
              <div className='card-body col-8 p-4'>
                <span><b>Nisha Parwar</b></span>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <p className='mt-4'>Last Updated: Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Blog;