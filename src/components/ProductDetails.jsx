import React, { useContext } from 'react'
import { PRODUCTS, PRODUCTS1 } from './Products';
import { ShopContext } from './ShopContext';


const ProductDetails = () => {

    const { removeToCart, addToCart, cartItems, updateCartItemCount, closeProductDetails, selectedProduct, } = useContext(ShopContext);

    const productId = selectedProduct || 0;
    const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find((p) => p.id === productId);


    return <>
        <div className='d-flex '>
            <div className='col-6 card'>
                <img src={product.image} alt='' className='img-fluid p-5' />
            </div>

            <div className='col-6 card p-3'>
                <div className='p-4'>
                    <span>{product.brand}</span>
                    <h3 className='my-3'>{product.name}</h3>
                    <div className='card-details'>
                        <p className='my-3'><strike className='text-danger'>{product.price * 2}</strike>&nbsp;<span className='text-success'>${product.price}</span></p>
                        <p className='mb-3'>The clothing business is growing, and demand has never been higher. It’s a lot of work bringing new ideas to the market, but with the right level of thoughtfulness and consideration, you can stand out</p>
                    </div>
                    <button
                        className='add-btn mx-1'
                        onClick={(event) => {
                            addToCart(product.id);
                        }}
                    > +
                    </button>
                    <input type='text' value={cartItems[product.id]}
                        onChange={(e) =>
                            updateCartItemCount(Number(e.target.value), product.id)}

                    />
                    <button
                        className='add-btn mx-1'
                        onClick={(event) => {
                            removeToCart(product.id);
                        }}
                    > -
                    </button>
                    <div className="input-group p-4">
                        <input type="text" className="form-control" placeholder="Enter your coupoun code..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button className="input-group-text" id="basic-addon2">Search</button>
                    </div>

                    <div className='card-footer'>
                        <h3 className='price text-center my-3'>Some more products of the similar type</h3>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {PRODUCTS.slice(3, 7).map((product) => (
                                <div className="col mb-2" key={product.id}>
                                    <div className="card h-100 m-auto">
                                        <img src={product.image} className="card-img-top img-fluid p-3" alt="..." />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {PRODUCTS1.slice(2, 6).map((product) => (
                                <div className="col mb-2" key={product.id}>
                                    <div className="card h-100 m-auto">
                                        <img src={product.image} className="card-img-top img-fluid p-3" alt="..." />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default ProductDetails;