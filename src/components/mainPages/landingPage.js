import React from 'react';

import Header from '../Header/Header';
// import Hero from '../Hero/Hero';
// import Auctions from '../Auctions/AuctionsOne';
// import TopSeller from '../TopSeller/TopSellerOne';
// import Collections from '../Collections/Collections';
// import Explore from '../Explore/ExploreOne';
// import Work from '../Work/Work';
import Footer from '../Footer/Footer';
import ModalSearch from '../Modal/ModalSearch';
import ModalMenu from '../Modal/ModalMenu';
import Scrollup from '../Scrollup/Scrollup';
import HomePage from '../home/home';

const LandingPage=()=>{

        return (
            <div className="main">
                <Header />
                <HomePage />
                {/* <Auctions />
                <TopSeller />
                <Collections />
                <Explore />
                <Work /> */}
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }

export default LandingPage;