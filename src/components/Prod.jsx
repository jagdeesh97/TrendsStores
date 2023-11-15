import React, { useContext } from 'react'
import { ShopContext } from './ShopContext';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const Prod = (props) => {
    const { id, name, price, image, brand } = props.data;
    const { addToCart, cartItems, viewProductDetails} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return <>
        <div key={id} className='col-3 mb-3'>
            <div className='card'>
                <img src={image} alt='' className='img-fluid card-img-top p-3' />
                <div className='card-details p-3'>
                    <span>{brand}</span>
                    <h5 className='my-2'>{name}</h5>
                    <span className='d-flex align-items-center '> Rating:
                        <ReactStars
                            count={5}
                            edit={false}
                            value={4}
                            size={24}
                            activeColor="#cca27e"
                        /></span>
                    <p className='price mb-2'><span className='text-black'>Price:</span>` ${price}&nbsp;<span className='text-danger'><strike>{price * 2}</strike>&nbsp;Off</span></p>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='col-6 align-items-center'>
                            <Link to={'/details'} className='view-button' onClick={() => viewProductDetails(id)}>View Details</Link>
                        </div>
                        <div className='col-6 d-flex align-items-center justify-content-end'>
                            <button
                                className='add-btn'
                                onClick={(event) => {
                                addToCart(id);
                                event.target.classList.toggle('text-success');
                              
                                }}
                            >
                                Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Prod;