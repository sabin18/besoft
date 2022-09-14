import React from "react";
import Product from "../product/product";
import posImage from "../../assets/images/p2_pro_verde-1024x1024-1@2x.png";
import cardImage from "../../assets/images/kisspng-credit-card-bank-card-@2x.png";
import faceImage from "../../assets/images/speedfacev5@2x.png";

const AllProducts = () => {
  const products = [
    {
      name: "POS Machine",
      image: posImage,
      price: "$350",
    },
    {
      name: "Electronic Card",
      image: cardImage,
      price: "$2",
    },
    {
      name: "Face Attendance",
      image: faceImage,
      price: "$450",
    },
  ];
  return (
    <section className="author-area explore-area popular-collections-area bg-white">
      <div className="container">
        <div
          className="bg-primary justify-content-center my-4"
          style={{ borderRadius: "30px" }}
        >
          <i className="icons bx bx-cart text-white mt-2 p-2 mr-2 float-right" />
          <h2 className="mb-0 p-2 text-center mt-0">Online Market</h2>
          <p className="text-white p-2 mt-1 text-center mb-0">
            some of the items
          </p>
          <div className="row d-flex mx-4">
            <Product products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
