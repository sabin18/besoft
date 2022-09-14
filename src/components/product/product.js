import React from "react";

const Product = (props) => {
  const { products } = props;
  return (
    <>
      {products.map((product, index) => (
        <div className="col-md-4 my-4" style={{ top: "40px" }}>
          <div
            className="card no-hover text-center bg-white shadow-sm"
            key={index}
          >
            <h4 className="my-1 text-primary font-weight-bold font-size-13">
              {product.price}
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
            <div className="image-over">
              <img className="card-img-top" src={product.image} alt="" />
              {/* Author */}
              {/* <div className="author">
                        <div className="author-thumb avatar-lg">
                            <img className="rounded-circle" src="" alt="" />
                        </div>
                    </div> */}
            </div>
            {/* Card Caption */}
            <div className="card-caption col-12 p-0">
              {/* Card Body */}
              <div className="card-body mt-2">
                <h5 className="mb-3 text-dark">{product.name}</h5>
                {/* <p className="my-3">zzzzzzz</p> */}
                {/* <div className="input-group"> */}
                {/* <input type="text" className="form-control" placeholder="dddddddd" />
                 */}
                <div>
                  <button
                    className="btn btn-block btn-bordered-warning bg-warning"
                    style={{ top: "50px" }}
                    // onClick={() => history.push("/cart")}
                  >
                    ADD TO CART
                  </button>
                </div>
                {/* </div> */}
                {/* Social Icons */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
