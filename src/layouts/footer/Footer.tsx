import React from "react";

const Footer: React.FC<any> = () => {

  return (
    <>
      <div className="CustomContainer">
        <div className="footerMainClass">
          <div className="container">
            <div className="footerMainContent">
              <div>
                <div className="footerImg">
                  <img src="./img/logo/mainLogo.png" />
                </div>
                <div className="Copyright">
                  <p>© 2021 Karmadhi Pvt   All rights reserved</p>
                </div>
              </div>
              <div className="footerBlogContent">
                <h2>TOP BLOG POSTS</h2>
                <p>Lorem ipsum dolor sit amet </p>
                <p>consectetur adipiscing elit </p>
                <p>quis nostrud exercitation ullamco laboris nisi ut</p>
                <p>Duis aute irure dolor in reprehenderit </p>
              </div>

              <div className="footerService">
                <h2>Services</h2>
                <p>Software testing </p>
                <p>Web app & Software Development </p>
                <p>Create/manage your infra</p>
                <p>Professional at location</p>
                <p>mobile development</p>
              </div>

              <div className="footerFollow">
                <h2>Follow us</h2>
                <div className="FooterLink">
                  <img src="./img/Footer/facebook.png" />
                  <a href="https://www.facebook.com/">
                    Facebook
                  </a>
                </div>
                <div className="FooterLink">
                  <img src="./img/Footer/linkedin-logo.png" />
                  <a href="https://www.linkedin.com/">
                    Linkedin
                  </a>
                </div>
                <div className="FooterLink">
                  <img src="./img/Footer/twitter.png" />
                  <a href="https://twitter.com/">
                    Twitter
                  </a>
                </div>
                <div className="FooterLink">
                  <img src="./img/Footer/instagram.png" />
                  <a href="https://www.instagram.com/">
                    Instagram
                  </a>
                </div>
                <div>
                  <img src="./img/Footer/youtube.png" />
                  <a href="https://www.youtube.com">
                    Youtube
                  </a>
                </div>
              </div>

              <div className="footernewSletter">
                <h2> NEWSLETTER </h2>
                <p> Receive our newsletter about new technologies and jobs in your area </p>
                <div className="position-relative">
                  <input type="email" placeholder="Enter Email" />
                  <button>
                    submit
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between footercookiesbox">
              <a href="#">Sitemap</a>
              <span></span>
              <a href="#">Terms and Conditions</a>
              <span></span>
              <a href="#">Privacy statement</a>
              <span></span>
              <a href="#">Cookies</a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
