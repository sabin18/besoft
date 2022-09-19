import React from "react";
import posImage from "../../assets/images/p2_pro_verde-1024x1024-1@2x.png";

const CartItem = () => {
  return (
    <section className="work-area bg-white">
      <div
        className="container border border-light rounded shadow"
        style={{ borderRadius: "30px" }}
      >
        <div >
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
        <div className="row items m-2">
        <div className="border border-light rounded shadow bg-white"  style={{ top: "3.4rem",
    height: "6.4rem",
    width: "4.5rem"}}>
<img className="avatar-lg" src={posImage} alt="" style={{ marginTop: "0.7rem",
    height: "6.4rem",
    width: "4.5rem"}} />
</div>
        <div className="row items d-flex p-4 pt-1">
<div className="d-flex border-top border-bottom secondary-t-color">
<div className="pr-4">
<h5 className="text-dark">pos Machine</h5>
</div>
<div>
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
</div>
<div className="pl-4 pt-3 mb-0">
<button className="btn btn-sm btn-bordered-warning bg-warning">
                  PAY NOW
                </button>
</div>

        </div>
        </div>  
      </div>
    </section>
  );
};

export default CartItem;
