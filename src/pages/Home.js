import { useHistory } from "react-router-dom";
// import "./Home.scss";
import { useState, useEffect } from "react";
import Header from "../component/Header";

const Home = () => {
  const [number, setNumber] = useState(0);
  const [cart, setCart] = useState({});

  const handlePlus = () => {
    setNumber(number++);
  };

  const handleMinus = () => {
    if (number <= 0) {
      setNumber(0);
    } else {
      setNumber(number--);
    }
  };

  const handleAddCart = (e) => {
    setCart(e);
  };

  return (
    <div>
      <div className="row">
        <Header />
      </div>
      {/* End header */}
      {/* Start Main */}
      <main>
        {/* Start Mobile Slider */}
        <div className="slider-mob">
          <div className="slider-mob__bar">
            <div className="slider-mob__item">
              <img src="../images/image-product-1.jpg" alt="Product 1" />
            </div>
            <div className="slider-mob__item">
              <img src="../images/image-product-2.jpg" alt="Product 1" />
            </div>
            <div className="slider-mob__item">
              <img src="../images/image-product-3.jpg" alt="Product 1" />
            </div>
            <div className="slider-mob__item">
              <img src="../images/image-product-4.jpg" alt="Product 1" />
            </div>
          </div>
          <div className="slider-mob__control">
            <div className="slider-mob__prev-btn">
              <img src="../images/icon-previous.svg" alt="previous product" />
            </div>
            <div className="slider-mob__next-btn">
              <img src="../images/icon-next.svg" alt="next product" />
            </div>
          </div>
          {/* End Mobile Slider */}
        </div>
        <div className="row flex">
          {/* Start Desktop Slider */}
          <div className="slider-desktop">
            <div className="slider-desktop__active-photo">
              <img src="../images/image-product-1.jpg" alt="Product" />
            </div>
            <div className="slider-desktop__thumbnails">
              <div
                className="slider-desktop__thumb slider-desktop__thumb--active"
                data-src="../images/image-product-1.jpg"
              >
                <img
                  src="../images/image-product-1-thumbnail.jpg"
                  alt="product thumbnail"
                />
              </div>
              <div
                className="slider-desktop__thumb"
                data-src="../images/image-product-2.jpg"
              >
                <img
                  src="../images/image-product-2-thumbnail.jpg"
                  alt="product thumbnail"
                />
              </div>
              <div
                className="slider-desktop__thumb"
                data-src="../images/image-product-3.jpg"
              >
                <img
                  src="../images/image-product-3-thumbnail.jpg"
                  alt="product thumbnail"
                />
              </div>
              <div
                className="slider-desktop__thumb"
                data-src="../images/image-product-4.jpg"
              >
                <img
                  src="../images/image-product-4-thumbnail.jpg"
                  alt="product thumbnail"
                />
              </div>
            </div>
          </div>
          {/* End Desktop Slider */}
          <div className="product-buy">
            <span className="company-name">Sneaker company</span>
            <h1 className="main-heading">Fall Limited Edition Sneakers</h1>
            <p className="paragraph">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="product-buy__prices">
              <span className="product-buy__new-price">$125.00</span>
              <span className="product-buy__disc-percent">50%</span>
              <span className="product-buy__old-price">$250.00</span>
            </div>
            <div className="flex-parent">
              <div className="product-buy__quantity">
                <input
                  type="number"
                  name="product-quantity"
                  id="product-quantity"
                  defaultValue={number}
                />
                <div className="product-buy__increase-icon">
                  <img
                    src="../images/plus.png"
                    style={{ width: "24px" }}
                    alt="plus"
                    onClick={handlePlus}
                  />
                </div>
                <div className="product-buy__decrease-icon">
                  <img
                    src="../images/minus.png"
                    alt="minus"
                    onClick={handleMinus}
                  />
                </div>
              </div>
              <button className="product-buy__add-cart" onClick={handleAddCart}>
                <svg width={22} height={20} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fillRule="nonzero"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="slider-lightbox">
        <div className="slider-lightbox__active-photo">
          <div className="slider-lightbox__close-icon">
            <svg width={14} height={15} xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <img src="images/image-product-1.jpg" alt="Product" />
          <div className="slider-lightbox__prev-btn">
            <svg width={12} height={18} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                strokeWidth={3}
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="slider-lightbox__next-btn">
            <svg width={13} height={18} xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                strokeWidth={3}
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="slider-lightbox__thumbnails">
          <div
            className="slider-lightbox__thumb slider-lightbox__thumb--active"
            data-src="../images/image-product-1.jpg"
          >
            <img
              src="../images/image-product-1-thumbnail.jpg"
              alt="product thumbnail"
            />
          </div>
          <div
            className="slider-lightbox__thumb"
            data-src="../images/image-product-2.jpg"
          >
            <img
              src="../images/image-product-2-thumbnail.jpg"
              alt="product thumbnail"
            />
          </div>
          <div
            className="slider-lightbox__thumb"
            data-src="../images/image-product-3.jpg"
          >
            <img
              src="../images/image-product-3-thumbnail.jpg"
              alt="product thumbnail"
            />
          </div>
          <div
            className="slider-lightbox__thumb"
            data-src="../images/image-product-4.jpg"
          >
            <img
              src="../images/image-product-4-thumbnail.jpg"
              alt="product thumbnail"
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="copyright">
          Challenge By{" "}
          <a href="#" target="_blank" className="footer-link">
            VN
          </a>{" "}
          Coded By{" "}
          <a href="#" target="_blank" className="footer-link">
            Hung
          </a>{" "}
          ©2022
        </p>
      </footer>
    </div>
  );
};
export default Home;
