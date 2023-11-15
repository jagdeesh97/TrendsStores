import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

const CartItems = (props) => {
    const { id, name, price, image, brand } = props.data;
    const { getTotalCartProducts,addToCart, cartItems, viewProductDetails, removeToCart, updateCartItemCount } = useContext(ShopContext);

    return <>
        <tbody key={id}>
            <tr placeholder='hello'>
                <td>
                    <img src={image} alt='' className='img-fluid my-4' />
                </td>
                <td>
                    <p>Product Brand: <span className='price'> {  brand}</span></p>
                    <p className='d-flex'>Product Name: <h5 className='price'> {  name}</h5></p>
                    <p>Product Price: <span className='price'> ${price}</span></p>
                    <p>Items in Stock: <span className='text-danger'>{Math.floor(Math.random() * 10) + 1}</span></p>
                </td>
                <td>
                    <button
                        className='add-btn mx-1'
                        onClick={(event) => {
                            addToCart(id);
                        }}
                    > +
                    </button>
                    <input type='text' value={cartItems[id]}
                        onChange={(e) =>
                            updateCartItemCount(Number(e.target.value), id)}

                    />
                    <button
                        className='add-btn mx-1'
                        onClick={(event) => {
                            removeToCart(id);
                        }}
                    > -
                    </button>
                </td>
                <td>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter your coupoun code..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button className="input-group-text" id="basic-addon2">Search</button>
                    </div>
                </td>
            </tr>
           
        </tbody>
    </>
}

export default CartItems;