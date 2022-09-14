import React from "react";
import posImage from "../../assets/images/p2_pro_verde-1024x1024-1@2x.png";

const CartItem = () => {
  return (
    <section className="work-area bg-white">
      <div
        className="container border border-light rounded shadow"
        style={{ borderRadius: "30px" }}
      >
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro mb-4">
              <div className="intro-content">
                {/* <span>{this.state.data.preHeading}</span> */}
                <h3 className="mt-3 mb-0 text-dark">Your Cart</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row items ml-2">
          {/* {this.state.workData.map((item, idx) => { */}
          {/* return ( */}
          <li
            key={1}
            className="single-tab-list d-flex align-items-center col-12 col-sm-6 col-lg-12"
          >
            <div className="border border-light rounded shadow bg-white"
              style={{ borderRadius: "30px",top:"30px" }}>
              <img className="avatar-lg" src={posImage} alt="" />
            
            </div>
            {/* Activity Content */}
            <div className="row activity-content ml-4 d-flex">
              <div className="col-12 col-sm-6 col-lg-12 d-flex">
              <div className="d-flex border-top border-bottom secondary-t-color">
                <a href="/item-details" className="pr-4">
                  <h5 className="text-dark">pos Machine</h5>
                </a>
                <h4 className="text-primary font-weight-bold font-size-13">
                  500
                  <span
                    className="text-warning"
                    style={{
                      fontSize: "12px",
                      position: "absolute",
                      paddingTop: "0.25rem",
                    }}
                  >
                    .00
                  </span>
                </h4>
                </div>
                <div className="pl-4 pt-3 mb-0">
                <button className="btn btn-sm btn-bordered-warning bg-warning">
                  PAY NOW
                </button>
              </div>
              </div>
            </div>
          </li>

          {/* ); */}
          {/* })} */}
        </div>
      </div>
    </section>
  );
};

export default CartItem;
