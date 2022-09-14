import React from 'react';

import Header from '../Header/Header';
import Breadcrumb from './contactUsHeader';
// import ContactSection from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ModalSearch from '../Modal/ModalSearch';
import ModalMenu from '../Modal/ModalMenu';
import Scrollup from '../Scrollup/Scrollup';
import ContactUs from './contact';

const Contact =()=>{
        return (
            <div className="main">
                <Header />
                <Breadcrumb />
                <ContactUs />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }

export default Contact;