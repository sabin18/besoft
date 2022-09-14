import React from 'react';

const Breadcrumb =()=> {
        return (
            <section className="overlay-white d-flex align-items-center bg-white pb-1 mr-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Breamcrumb Content */}
                            <div className="breadcrumb-content text-center">
                                <h2 className="m-0 text-dark">Contact us</h2>
                                <p>Send us an email via mudelly@besoft.info and ring our phone on +393463219375 | +250788319169
               and a representative will attend to you as soon as possible</p>
                            </div>
                        </div>
                    </div>
                    <hr className="text-dark"/>
                </div> 
            </section>
        );
}

export default Breadcrumb;