import React from 'react';

const Solution =()=>{
        return (
            <section className="work-area bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    {/* <span>{this.state.data.preHeading}</span> */}
                                    <h3 className="mt-3 mb-0 text-dark">Our Solution</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {/* {this.state.workData.map((item, idx) => { */}
                            {/* return ( */}
                            <div key="1" className="col-12 col-sm-4 col-lg-5 item border border-light rounded shadow m-2">
                                    {/* Single Work */}
                                    <div className="single-work mb-2">
                                        
                                        <i className="icons bx bxs-gas-pump  text-primary" />
                                        <h4 className="text-dark"><b>Analyze Product</b></h4>
                                        <p className="text-dark">With the help of gas stations , we can offer a discount on used fuel , and
our system distributes funds to project stakeholders in real time
utilizing Mobile Money and bank accounts . This approach will , in the
near future aid SDA church members in supporting core mission and
other projects by utilizing the gas station's discount .</p>
                                    </div>
                                </div>
                                <div key="1" className="col-12 col-sm-4 col-lg-5 item border border-light rounded shadow m-2">
                                    {/* Single Work */}
                                    <div className="single-work mb-2">
                                    <i className="icons bx bxs-factory text-primary" />
                                        <h4 className="text-dark"><b>Factory Managaement System</b></h4>
                                        <p className="text-dark">Through a special collaboration with MTN Rwanda , we have built a system that enables
RWANDA MOUTAIN TEA to control the attendance of its staff and farmers , and process
the payments basing on the weighted yielding and field attendance all recorded
digitally into the system .</p>
                                    </div>
                                </div>
                                <div key="1" className="col-12 col-sm-6 col-lg-5 item border border-light rounded shadow m-2">
                                    {/* Single Work */}
                                    <div className="single-work mb-2">
                                        <i className="icons bx bxs-collection text-primary" />
                                        <h4 className="text-dark"><b>Fee Collection Service</b></h4>
                                        <p className="text-dark">We have designed a system that allows the hospital and all clinics and
health centers of the church to integrate payment with all MNOs and
banks through a specific relationship with the SDA church . This will
simplify the handling of cash collected by all those institutions , as well
as the reporting of all collected amounts , allowing for cashless
transactions . The church will have complete real - time control over all
actions performed by each employee .</p>
                                    </div>
                                </div>
                                <div key="1" className="col-12 col-sm-6 col-lg-5 item border border-light rounded shadow m-2">
                                    {/* Single Work */}
                                    <div className="single-work mb-2">
                                        <i className="icons bx bxs-business text-primary" />
                                        <h4 className="text-dark"><b>School Management System</b></h4>
                                        <p className="text-dark">iedukos is a modern school management software that suites almost every school or
educational institution , offering features that caters for ; student admission . student
living allowances , school fees collection , academic and exam management . It
automates all processes , generates insightful reports , to enable school officials make
better & faster decisions . Partnering with the church on this venture means all the
payments will be handled on the digital platform integrated with the MNOs afore
mentioned and CRDB offering banking services for the institutions .</p>
                                    </div>
                                </div>
                            {/* ); */}
                        {/* })} */}
                    </div>
                </div>
            </section>
        );
    }

export default Solution;