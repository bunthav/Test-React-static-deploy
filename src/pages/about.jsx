import React from 'react'
import BreadCrumps from '../components/BreadCrumps'

function about() {
  return (
    <div>
      


      <div>
  {/* Cart */}
  {/* <div className="wrap-header-cart js-panel-cart">
    <div className="s-full js-hide-cart" />
    <div className="header-cart flex-col-l p-l-65 p-r-25">
      <div className="header-cart-title flex-w flex-sb-m p-b-8">
        <span className="mtext-103 cl2">
          Your Cart
        </span>
        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
          <i className="zmdi zmdi-close" />
        </div>
      </div>
      <div className="header-cart-content flex-w js-pscroll">
        <ul className="header-cart-wrapitem w-full">
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="images/item-cart-01.jpg" alt="IMG" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                White Shirt Pleat
              </a>
              <span className="header-cart-item-info">
                1 x $19.00
              </span>
            </div>
          </li>
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="images/item-cart-02.jpg" alt="IMG" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                Converse All Star
              </a>
              <span className="header-cart-item-info">
                1 x $39.00
              </span>
            </div>
          </li>
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="images/item-cart-03.jpg" alt="IMG" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                Nixon Porter Leather
              </a>
              <span className="header-cart-item-info">
                1 x $17.00
              </span>
            </div>
          </li>
        </ul>
        <div className="w-full">
          <div className="header-cart-total w-full p-tb-40">
            Total: $75.00
          </div>
          <div className="header-cart-buttons flex-w w-full">
            <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
              View Cart
            </a>
            <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
              Check Out
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Title page */}
  <div style={{color: 'white'}}>
          <BreadCrumps pageName="About"/>
        </div>	
  {/* Content page */}
  <section className="bg0 p-t-75 p-b-120">
    <div className="container">
      <div className="row p-b-148">
        <div className="col-md-7 col-lg-8">
                <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                  <h3 className="mtext-111 cl2 p-b-16">
                    My Story
                  </h3>
                  <p className="stext-113 cl6 p-b-26">
                    This project started as a personal challenge—a way to dive into something new and expand my knowledge. Building an e-commerce platform with React wasn't just about coding; it was about learning, growing, and pushing past obstacles to create something functional and meaningful.
                  </p>
                  <p className="stext-113 cl6 p-b-26">
                    What makes this project unique is the way I've adapted a template and modified it to truly make it my own. From adding new products to getting the add-to-cart functionality working smoothly, every piece of this site has been refined through hands-on experience. I’ve even integrated PayPal sandbox testing to ensure seamless transactions, bringing it closer to a real-world shopping experience.
                  </p>
                  <p className="stext-113 cl6 p-b-26">
                    The goal is simple—to create an online shopping experience that feels authentic and intuitive. Every challenge, every error, every breakthrough has led to a better platform, and the learning never stops. React has been an exciting journey, sometimes difficult, but always rewarding.
                  </p>
                  <p className="stext-113 cl6 p-b-26">
                    Looking ahead, I hope to use my skills to help others—whether it's designing, creating, or building something new for people who need it. This is just the beginning, and I’m excited to see where it leads.
                  </p>
                </div>

        </div>
        <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
          <div className="how-bor1 ">
            <div className="hov-img0">
              <img src="images/me1.png" alt="IMG" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>







    </div>
  )
}

export default about