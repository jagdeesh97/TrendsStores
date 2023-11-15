import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import NewArrival from '../components/NewArrival';
import img1 from '../assets/images/banner/b17.jpg';
import img2 from '../assets/images/banner/b10.jpg';



const Wishlist = () => {
  return <>
    <section className='wishlist-banner'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='banner-details p-3 d-flex flex-column align-items-start justify-content-center'>
            <span className='shadow-lg p-3 text-white'>Trade in offer !</span>
            <h1 className='my-3'>Super Value Deals</h1>
            <h2>On All Products</h2>
            <p className='m-0 py-2'>Save more with our store</p>
            <Link to='/shop' className='btn-primary button-link'>Shop Now</Link>
          </div>
        </div>
      </div>
    </section>
    <Hero />

    <section className='featured-products p-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='text-center'>
            <h1>Our Featured Products</h1>
            <p>All weather new modern design</p>
          </div>
          <FeaturedProducts />
        </div>
      </div>
    </section>

    <section className='repair'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='repair-details d-flex flex-column text-center align-items-center p-3'>
            <span className='text-white mt-2'>Repair Services</span>
            <h2 className='text-white'>Get <span className='text-success'> <b>70%</b> </span>off on All Products and Accessories</h2>
            <div className='mt-3'>
              <Link to={'/about'}><button className='button-repair'>Explore Now</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='new-products p-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='text-center'>
            <h1>New Arrivals</h1>
            <p>Your Best Designer outfits</p>
          </div>
          <NewArrival />
        </div>
      </div>
    </section>

    <section className='deals p-3'>
      <div className='container-xxl'>
        <div className='row '>
          <div className='col-6'>
            <div className='card row'>
              <div className='d-flex'>
                <div className='col-md-4'>
                  <img src={img1} alt='' className='img-fluid rounded-start h-100 p-2' />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <span>Hot Deals</span>
                    <h3 className='card-title'>Buy One get One free.</h3>
                    <p>The latest best collections in our closet feel cute with our outfits.</p>
                    <Link to={'/blog'}>
                      <button className='button-deals mt-3'>Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='col-6'>
            <div className='card row'>
              <div className='d-flex'>
                <div className='col-md-4'>
                  <img src={img2} alt='' className='img-fluid rounded-start h-100 p-2' />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <span>Season-In</span>
                    <h3 className='card-title'>All Weather Attire.</h3>
                    <p>The latest best collections in our closet feel cute with our outfits.</p>
                    <Link to={'/blog'}>
                      <button className='button-deals mt-3'>Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Wishlist;
