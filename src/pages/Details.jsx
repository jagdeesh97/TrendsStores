import React from 'react';
import ProductDetails from '../components/ProductDetails';


const Details = () => {

  return <>
      <section className='details p-5'>
        <div className='container-xxl'>
          <div className='row'>
             <ProductDetails/>
          </div>
        </div>
      </section>
  </>
}

export default Details;