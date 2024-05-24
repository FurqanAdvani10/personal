import React from 'react'
import './offer.css'
import { FaArrowRight } from "react-icons/fa6";
import logo  from '../../Assets/imgpsh_fullsize_anim (1).png'


function Offering() {
    return (
        <div className='offer-section'>

        <div className='offer-main section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 col-6 col-lg-6'>
                        <div className='offer-heading'>
                            <h4>
                                OUR SERVICES LIST
                            </h4>
                            <h1>
                                WHAT WE’RE OFFERING
                            </h1>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-6 col-lg-6'>
                        <div className='offer-para'>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='offer-box-container'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-12 col-3 col-lg-3'>
                            <div className='offer-box'>
                                <div className='offer-icon'>
                                    <img src={logo} alt='' />
                                </div>
                                <div className='offer-content'>
                                    <p>01</p>
                                    <h4>
                                        UI / UX
                                    </h4>
                                    <h4>
                                    CREATIVE DESIGN
                                    </h4>
                                </div>
                                <div className='offer-arrow'>
                                <i><FaArrowRight /></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-12 col-3 col-lg-3'>
                        <div className='offer-box border-box'>
                        <div className='offer-icon'>
                                    <img src={logo} alt='' />
                                </div>
                                <div className='offer-content'>
                                <p>02</p>
                                    <h4>
                                        UI / UX
                                    </h4>
                                    <h4>
                                    CREATIVE DESIGN
                                    </h4>
                                </div>
                                <div className='offer-arrow'>
                                    <i><FaArrowRight /></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-12 col-3 col-lg-3'>
                        <div className='offer-box border-box'>
                        <div className='offer-icon'>
                                    <img src={logo} alt='' />
                                </div>
                                <div className='offer-content'>
                                <p>03</p>
                                    <h4>
                                        UI / UX
                                    </h4>
                                    <h4>
                                    CREATIVE DESIGN
                                    </h4>
                                </div>
                                <div className='offer-arrow'>
                                <i><FaArrowRight /></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-12 col-3 col-lg-3'>
                        <div className='offer-box border-box'>
                        <div className='offer-icon'>
                                    <img src={logo} alt='' />
                                </div>
                                <div className='offer-content'>
                                <p>04</p>
                                    <h4>
                                        UI / UX
                                    </h4>
                                    <h4>
                                    CREATIVE DESIGN
                                    </h4>
                                </div>
                                <div className='offer-arrow'>
                                <i><FaArrowRight /></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr  className='offer-hr'/>
                <div className='offer-footer'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12 col-sm-12 col-12'>
                            <div className='offer-end'>
                                <h4 className='P-0 M-0'>
                                QUTIIZ SERVICES BUILT SPECIFICALLY FOR YOUR BUSINESS. <span>FIND YOUR SOLUTION</span> 
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </div>

    )
}

export default Offering