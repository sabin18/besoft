import React from 'react';

import Header from '../Header/Header';
// import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Footer from '../Footer/Footer';
import ModalSearch from '../Modal/ModalSearch';
import ModalMenu from '../Modal/ModalMenu';
import Scrollup from '../Scrollup/Scrollup';
import AllProducts from '../product/AllProducts';

const OnlineMakert = ()=>{
    
        return (
            <div className="main">
                <Header />
                {/* <Breadcrumb title="Online Makert" subpage="Pages" page="Online Makert" /> */}
                <AllProducts />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
}

export default OnlineMakert;