import React, { useContext } from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import trendsLogo from "../assets/images/trendsLogo.png";
import { HiOutlineInboxIn } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import { BsCartPlus } from 'react-icons/bs';
import { ShopContext } from './ShopContext';

const Header = () => {
  const location = useLocation();
  const { user, logoutUser, getTotalCartProducts } = useContext(ShopContext);
  const totalProducts = getTotalCartProducts();

  const displayUsername = (email) => {
    const username = email.split('@')[0];
    return username;
  };


  return (
    <>
      <header className='header-top-strip p-1 px-4 shadow-md'>
        <div className='container-xxl '>
          <div className='row align-items-center'>
            <div className='col-6'>
              <p>The trending outfits with the most significant discounts </p>
            </div>
            <div className='col-6 d-flex justify-content-between'>
              <div>
                <a href='tel: +918874747658'>Call US +91 9984747658</a>
              </div>
              <div>
                <Link><BiPhoneCall className='fs-3 mx-4' /></Link>
                <Link><AiOutlineMail className='fs-3 mx-4' /></Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper sticky-top py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2 text-center'>
              <Link to={'/'}><img src={trendsLogo} alt='' className='img-fluid logo' /></Link>
            </div>
            <div className='col-3 d-flex align-items-center'>
              <div className="input-group d-none d-md-flex">
                <input type="text" className="form-control" placeholder="Find products ..." aria-label="Find products ..." aria-describedby="basic-addon2" />
                <button className="input-group-text" id="basic-addon2">Search</button>
              </div>
            </div>
            <div className='nav-links col-4  d-flex align-items-center justify-content-between text-center m-auto'>
              <Link to={'/'} className={location.pathname === '/' ? 'active' : 'inactive'}>Home</Link>
              <Link to={'/shop'} className={location.pathname === '/shop' ? 'active' : 'inactive'}>Shop</Link>
              <Link to={'/blog'} className={location.pathname === '/blog' ? 'active' : 'inactive'}>Blog</Link>
              <Link to={'/about'} className={location.pathname === '/about' ? 'active' : 'inactive'}>About</Link>
              <Link to={'/contact'} className={location.pathname === '/contact' ? 'active' : 'inactive'}>Contact</Link>
            </div>
            <div className='nav-links-nav col-3 d-flex align-items-center justify-content-around fs-3'>
              <Link to={'wishlist'} className={location.pathname === '/wishlist' ? 'inactive' : 'active'}>
                <div className='d-flex'>
                  <span><HiOutlineInboxIn className='fs-4 mx-2' /></span>
                  <p>Wishlist</p>
                </div>
              </Link>
              {user ? (
                <Link className={location.pathname === '/login' ? 'inactive' : 'active'}>
                  <div className='d-flex'>
                    <span><VscAccount className='fs-4 mx-2' onClick={logoutUser} /></span>
                    <p>{`Hi, `+displayUsername(user.email)}</p>
                  </div>
                </Link>
              ) : (
                <Link to={'login'} className={location.pathname === '/login' ? 'inactive' : 'active'}>
                  <div className='d-flex'>
                    <span><VscAccount className='fs-4 mx-2' /></span>
                    <p>Account</p>
                  </div>
                </Link>
              )}
              <Link to={'cart'} className={location.pathname === '/cart' ? 'inactive' : 'active'}>
                <div className='d-flex'>
                  <span><BsCartPlus className='fs-4 mx-2' /></span>
                  <p>Cart
                    <span className='text-danger'>
                      {totalProducts > 0 && `(${totalProducts})`}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

