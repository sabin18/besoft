import React from 'react';

const Footer =()=>{
  
        return (
            <footer className="footer-area border showdow">
                {/* Footer Bottom */}
                <div className="footer-bottom bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                    {/* Copyright Left */}
                                    <div className="copyright-left text-dark">©2022 Besoft, All Rights Reserved.</div>
                                    {/* Copyright Right */}
                                    {/* <div className="copyright-right text-dark">Made with <i className="fas fa-heart" /> By <a href="#">Themeland</a></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
}

export default Footer;