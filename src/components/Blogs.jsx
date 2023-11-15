import React from 'react';
import blog1 from '../assets/images/blog/blog-1.jpg';
import blog2 from '../assets/images/blog/blog-2.jpg';
import blog3 from '../assets/images/blog/blog-3.jpg';
import blog4 from '../assets/images/blog/blog-4.jpg';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return <>
    <div className='col-3'>
        <div className='card'>
            <img src={blog1} alt='' className='card-img-top img-fluid p-4'/>
            <div className='card-body'>
                <p>I am very satisfied with Utsav Fashion in regards to handling all my orders, addressing all the issues that I had with a saree blouse, and exchanging a saree!</p>
                <Link to={'/about'}>
                  <button className='button-blog'>Learn more</button>
                </Link>
            </div>
        </div>
    </div>

    <div className='col-3'>
        <div className='card'>
            <img src={blog2} alt='' className='card-img-top img-fluid p-4'/>
            <div className='card-body'>
                <p>I am very satisfied with Utsav Fashion in regards to handling all my orders, addressing all the issues that I had with a saree blouse, and exchanging a saree!</p>
                <Link to={'/about'}>
                  <button className='button-blog'>Learn more</button>
                </Link>
            </div>
        </div>
    </div>

    <div className='col-3'>
        <div className='card'>
            <img src={blog3} alt='' className='card-img-top img-fluid p-4'/>
            <div className='card-body'>
                <p>I am very satisfied with Utsav Fashion in regards to handling all my orders, addressing all the issues that I had with a saree blouse, and exchanging a saree!</p>
                <Link to={'/about'}>
                  <button className='button-blog'>Learn more</button>
                </Link>
            </div>
        </div>
    </div>

    <div className='col-3'>
        <div className='card'>
            <img src={blog4} alt='' className='card-img-top img-fluid p-4'/>
            <div className='card-body'>
                <p>I am very satisfied with Utsav Fashion in regards to handling all my orders, addressing all the issues that I had with a saree blouse, and exchanging a saree!</p>
                <Link to={'/about'}>
                  <button className='button-blog'>Learn more</button>
                </Link>
            </div>
        </div>
    </div>
  </>
}

export default Blogs;