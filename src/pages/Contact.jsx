import React from 'react';


const Contact = () => {
  return <>
    <section className='contact-wrapper p-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='text-center mb-3'>
            <h1 className=''>#Reach Out to Us</h1>
            <p className='text-white fs-3'>We are only a step away from you</p>
          </div>
        </div>
      </div>
    </section>

    <section className='contact-info p-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='col-6 d-flex align-items-center justify-content-center p-5'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3635788.8146235286!2d80.85930415!3d27.138192749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699326766927!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title='getMap'
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, height: '400px', width: '100%' }}
              ></iframe>
            </div>
            <div className='col-6 d-flex flex-column align-items-center justify-content-center p-4' style={{ background: '#e4f0e9da' }}>
              <h2 className='text-center'>Contact Us</h2>
              <div className='mb-3'><p><b>Address:</b> 2 / 331 , Viraj Khand, Gomtinagar, Lucknow</p> </div>
              <div className='mb-3'><p><b>Phone:</b>  <a className='footer-tel' href="tel:+1234567890">Call us at +91 9984747658</a></p> </div>
              <div className='mb-4'><p><b>Hours:</b> From 10 : 00 AM To 10 : 00 PM</p> </div>
              <div className='mx-5 text-center'>
                <p className='m3-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos iusto rerum architecto a eaque consequuntur impedit! Harum earum iste, suscipit soluta, culpa necessitatibus quia sit nulla doloremque officia cum.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos iusto rerum architecto a eaque consequuntur impedit! Harum earum iste, suscipit soluta, culpa necessitatibus quia sit nulla doloremque officia cum.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className='form p-3 mb-5'>
      <div className='.container-xxl'>
        <div className='row'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='card col-8 p-4'>
              <div className='text-center p-3'>
                <h2>Leave Us A message</h2>
              </div>
              <div className='col-12 d-flex'>
                <div className='col-6 p-2'>
                  <input type="text" className="form-control p-3" placeholder="Enter First Name" aria-label="Enter First Name" aria-describedby="basic-addon2" />
                </div>
                <div className='col-6 p-2'>
                  <input type="text" className="form-control p-3" placeholder="Enter Last Name" aria-label="Enter Last Name" aria-describedby="basic-addon2" />
                </div>
              </div>
              <div className='p-2'>
                <input type="text" className="form-control p-3" placeholder="Enter Your Email Address" aria-label="Enter Your Email Address" aria-describedby="basic-addon2" />
              </div>
              <div className="form-floating p-2">
                 <label for="floatingTextarea">Type your message here</label>
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea> 
              </div>
              <div className='mt-3 d-flex justify-content-center align-items-center'>
               <button type='submit' className='fs-4 p-2 mb-2'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Contact;