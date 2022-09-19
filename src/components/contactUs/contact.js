import React from 'react';
import LogoImage from "../../assets/images/BeSoft IT_Logo_FN-01.png"

const ContactUs =()=>{

        return (
            <section className="author-area bg-white pt-0 mt-0">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-6 col-lg-5">
                            {/* Author Profile */}
                            <img className="card-img-top" src={LogoImage} alt="" />
                        </div>
                        <div className="d-flex bg-dark" style={{width:"1px"}}>
                        <div className="vr bg-dark"></div>
</div>
                        <div className="col-12 col-md-6 col-lg-6">
                            {/* Item Form */}
                            <div className="row">
                                <h6 className="text-dark mb-0 pb-0">OUR MISSION</h6>
                                <p style={{marginTop:"1rem"}}>Our mission is to gain the trust and confidence of our clients through clear
communication , reasonable and objective guidance , together with a genuine and
palpable concern for their long term and comprehensive financial growth.</p>
                                <h6 className="text-dark mb-0 pb-0">OUR VISION</h6>
                                <p style={{marginTop:"1rem"}}>We believe advance technology and exceptional talent alone cannot guarantee
success . In a demanding business environment , it is essential to have a strong client
centric approach involving understanding client's exact business needs and
requirements . Our Vision is to become a leading provider of Fintech Solutions by
promoting and enabling the digital revolution all over the world</p>
                               </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

export default ContactUs;