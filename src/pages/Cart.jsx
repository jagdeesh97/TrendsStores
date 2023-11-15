import React, { useContext } from 'react';
import { PRODUCTS, PRODUCTS1 } from '../components/Products';
import CartItems from '../components/CartItems';
import { ShopContext } from '../components/ShopContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { getTotalCartAmount, getTotalCartProducts, clearCart, cartItems } = useContext(ShopContext);
  const TotalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts();
  return <>
    {TotalAmount > 0 ?
      <section className='cart-item p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <table>
              <thead className='my-2'>
                <th className='col-3 mb-5'>Products Image</th>
                <th className='col-3 mb-5'>Products Details</th>
                <th className='col-3 mb-5'>Edit</th>
                <th className='col-3 mb-5'>Coupons</th>
              </thead>
              {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <CartItems key={product.id} data={product} />
                }
              })}

            </table>
          </div><hr />
          <div className='cart-total d-flex justify-content-between mt-3 p-3'>
            <div>
              <Link to={'/shop'}><button className='continue-shopping'>Continue Shooping</button></Link>
            </div>
            <div className='mb-3 text-center p-2 clear-cart'>
              <Link className='continue-shopping bg-danger' onClick={()=> clearCart()}>Clear Cart</Link>
            </div>
            <div>
              <h3>Grand Total</h3>
              <p>Total Products : <span className='price'>{totalProducts}</span></p>
              <p className='my-2'>Payable Amount : <span className='price mb-4'>${TotalAmount}</span></p>
              <div>
                <Link to={'/checkout'}><button className='continue-shopping'>Check Out</button></Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      :
      <section className='add-items p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='text-center'>
              <h3>Your Cart is Empty!</h3>
              <p>Click here to <Link to={'/shop'}>Add items</Link></p>
            </div>
          </div>
        </div>
      </section>
    }
  </>
}

export default Cart;