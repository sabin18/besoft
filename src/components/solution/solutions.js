import React from 'react';

import Header from '../Header/Header';
// import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Footer from '../Footer/Footer';
import ModalSearch from '../Modal/ModalSearch';
import ModalMenu from '../Modal/ModalMenu';
import Scrollup from '../Scrollup/Scrollup';
import Solution from '../solution/solution';

const Solutions =()=>{

        return (
            <div className="main">
                <Header />
                {/* <Breadcrumb title="Online Makert" subpage="Pages" page="Online Makert" /> */}
                <Solution />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }

export default Solutions;