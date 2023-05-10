import React from "react";

const Footer = () => {
  return (
    <>
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <h3>Sign up for our newsletter!</h3>
                    <p>Subscribe to receive info on our latest news and episodes</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <form>
                        <input type="email" placeholder="Your emai address" />
                        <button>Subcribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
      <footer>
        <div className="container">
          <div className="img-con">
            <img
              src="https://preview.colorlib.com/theme/megapod/img/logo.png"
              alt=""
            />
            <p>
              Copyright ©2023 All rights reserved | This template is made with
              by <span>Colorlib</span>
            </p>
          </div>
          <div className="i-con">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-dribbble"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
