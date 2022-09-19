import React from 'react';
import icon1 from "../../assets/images/Icons-01.png"
import icon2 from "../../assets/images/Icons-02.png"
import icon3 from "../../assets/images/Icons-03.png"
import icon4 from "../../assets/images/Icons-04.png"

const Solution =()=>{
        return (
            <section className="work-area bg-white">
                <div className="container">
                    <div className="row pb-0 mb-0">
                            {/* Intro */}
                            <div>
                                <div>
                                    {/* <span>{this.state.data.preHeading}</span> */}
                                    <h2 className="mt-2 mb-0 text-dark">Our Solution</h2>
                                </div>
                            </div>
                    </div>
                    <div className="row items pt-4 flex-gap">
                        {/* {this.state.workData.map((item, idx) => { */}
                            {/* return ( */}
                            <div key="1" className="col-12 col-sm-12 col-lg-5 item border border-light shadow mr-4"  style={{marginTop:"1.3rem", borderRadius:"25px"}}>
                                    {/* Single Work */}
                                    <div className="single-work mb-2">
                                        
                                        <img className="icons text-primary" src={icon1} alt="" style={{position: "absolute", width:"57px", height:"55px",
marginTop: "-50px"}}/>
                                        <h4 className="text-dark pt-4"><b>Analyze Product</b></h4>
                                        <p className="text-dark">With the help of gas stations , we can offer a discount on used fuel , and
our system distributes funds to project stakeholders in real time
utilizing Mobile Money and bank accounts . This approach will , in the
near future aid SDA church members in supporting core mission and
other projects by utilizing the gas station's discount .</p>
                                    </div>
                                </div>
                                <div key="1" className="col-12 col-sm-12 col-lg-5 item border border-light shadow mr-4"  style={{marginTop:"1.3rem", borderRadius:"25px"}}>
                                    {/* Single Work */}
                                    <div className="single-work mb-2">
                                    <img className="icons text-primary" src={icon2}alt="" style={{position: "absolute", width:"57px", height:"55px",
marginTop: "-50px"}}/>
                                        <h4 className="text-dark pt-4"><b>Factory Managaement System</b></h4>
                                        <p className="text-dark">Through a special collaboration with MTN Rwanda , we have built a system that enables
RWANDA MOUTAIN TEA to control the attendance of its staff and farmers , and process
the payments basing on the weighted yielding and field attendance all recorded
digitally into the system .</p>
                                    </div>
                                </div>
                                <div key="1" className="col-12 col-sm-12 col-lg-5 item border border-light shadow mr-4"  style={{marginTop:"1.3rem", borderRadius:"25px"}}>
                                    {/* Single Work */}
                                    <div className="single-work mb-2 ">
                                    <img className="icons text-primary" src={icon3}alt="" style={{position: "absolute", width:"57px", height:"55px",
marginTop: "-50px"}}/>
                                        <h4 className="text-dark pt-4"><b>Fee Collection Service</b></h4>
                                        <p className="text-dark">We have designed a system that allows the hospital and all clinics and
health centers of the church to integrate payment with all MNOs and
banks through a specific relationship with the SDA church . This will
simplify the handling of cash collected by all those institutions , as well
as the reporting of all collected amounts , allowing for cashless
transactions . The church will have complete real - time control over all
actions performed by each employee .</p>
                                    </div>
                                </div>
                                <div key="1" className="col-12 col-sm-12 col-lg-5 item border border-light shadow mr-4"  style={{marginTop:"1.3rem", borderRadius:"25px"}}>
                                    {/* Single Work */}
                                    <div className="single-work mb-2">
                                    <img className="icons text-primary" src={icon4}alt="" style={{position: "absolute", width:"57px", height:"55px",
marginTop: "-50px"}}/>
                                        <h4 className="text-dark pt-4"><b>School Management System</b></h4>
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