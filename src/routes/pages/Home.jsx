import React from "react";
import { Link } from "react-router-dom";
import test from './assets/mainlogo.png';
import HeaderBanner from './components/HeaderBanner'; // Adjust the import path as necessary
const Home = () => {
  return (
    <>

<div className="container-fluid border-0 p-0 header-logo-container" style={{ background: "#F5F6F6" }}>
<div className="container border-0 py-1 p-1">
          <img
            src="https://scontent.fhdd4-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=r90WG9mPST4Q7kNvgHmWme4&_nc_ht=scontent.fhdd4-1.fna&oh=00_AYDcAS-aB7RB0Ea0DwBVC4qpvkeP9RG7eZfRmOZQltktdA&oe=66A6AEB9"
            alt="logo"
            style={{ width: "6rem", height: "6rem" }}
          />
        </div>
        <HeaderBanner />
      </div>
      <div className="d-flex justify-content-center mt-3">
      <div className="col-sm-6 mt-5 ms-5">
          <img
            src="https://www.svgrepo.com/show/177809/warning-signs.svg"
            alt="meta"
            style={{ width: "4rem", height: "4rem" }}
          />
          <h1 className="my-3 fs-1">
          Stand out with Meta <br /> Verified
          </h1>

          {/* Add 3 more spaces (adjust the marginBottom value as needed) */}
          <div style={{ marginBottom: "30px" }}></div>

          <Link
            to="/validation"
            className="border-0 text-white text-decoration-none"
            style={{
              background: "#0064e0",
              borderRadius: "100px",
              padding: "10px 35px",
            }}
          >
            Apply
          </Link>

          <p style={{ fontSize: "18px" }} className="mt-4">
          Meta Verified is a subscription bundle for creators and <br />
            businesses that helps you show the world your profile is <br />
            authentic and build credibility with your audience.
          </p>

          <p className="py-3" style={{ fontSize: '17px' }}>
          Sign up now 

          </p>

          <p className="mt-4 mb-0" style={{ fontSize: '1rem' }}>
            <span className="fw-semibold">Are you a business?</span> Get more
            information on
          </p>
          <Link to="/business-info" style={{ fontSize: '1rem', textDecoration: 'underline' }}>
            Meta verified for businesses
          </Link>

          <p className="mt-4 font-italic" style={{ fontSize: "13px" }}>
          Features, availability, and pricing may vary by region.
          </p>
        </div>

        <div
          className="col-sm-5 d-none d-sm-block img-smal order-2 img-fluid"
          /* Show on larger screens */
          style={{
            backgroundImage: `url(${test})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;
