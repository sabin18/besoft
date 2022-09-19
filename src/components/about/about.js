import React from "react";
import bgImage1 from "../../assets/images/About us.jpg";

const About = () => {
  return (
    <section className="author-area explore-area popular-collections-area bg-white">
      <div className="container pt-1">
        <div
          className="row justify-content-between bg-primary my-4"
          style={{ borderRadius: "35px" }}
        >
          <div className="col-12 col-md-6 col-lg-12 mb-4">
            <div className="row about-text" style={{ borderRadius: "35px"}}>
              <div className="col-12 col-md-6 col-lg-6">
                <h2 className="mt-4 mb-0 ml-2 font-weight-bold">
                  About <small>BeSoft</small>
                </h2>
                <p className="text-white ml-2">
                  Besoft It is a community solution to community problems . Is a
                  company founded in 2018 , and officially registered 2022 in
                  Italy , it is an Italian company legally registered with
                  Trading Identification Number PARTITA IVA ) 02669840064
                </p>
                <p className="text-white ml-2">
                  Birthed from BeSoft IT a software - oriented company , Besoft
                  IT came focusing on the Fintech industry , addressing issues
                  community society population faces while interacting with
                  digital payments . It is a community solution to community
                  problems .
                </p>
                <p className="text-white ml-2">
                  As a Fintech company , we leverage the current technologies
                  available to us and the immense experience of the founder and
                  the staff imported from BeSoft IT to create fruitful
                  relationships with our clients and forge strong & resourceful
                  partnerships
                </p>
                <button className="about-button btn btn-lg btn-bordered-warning text-dark bg-white float-right">
                  More About Us
                </button>
              </div>
              <div className="col-12 col-md-6 col-lg-6 image-over">
            <div style={{marginTop:"85px"}}>
              <img
                className="card-img-about"
                src={bgImage1}
                alt=""
                style={{ borderRadius: "45px" }}
              />
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-12 col-md-8">
                            <Explore />
                        </div> */}

      {/* </div> */}
    </section>
  );
};

export default About;
