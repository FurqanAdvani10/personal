import React, { useState } from 'react'
import './ourTeam.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'

function OurTeam() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='our-team section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-12 col-sm-12'>
                        <div className='our-heading'>
                            <h4>
                                OUR TEAM MEMBERS
                            </h4>
                            <h1>
                                MEET EXPERT PEOPLE
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='team-box'>

                    <div className='row'>
                        {/* <div className='col-md-12 col-sm-12 col-lg-12 col-12'> */}
                            <div className='col-md-3 col-sm-12 col-lg-3 col-12'>
                            <div className='box-container'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
        >
            <div className='box-img'>
                <img src='https://qutiiz-html.vercel.app/main-html/assets/images/team/team-one-img-1.jpg' draggable="false" alt='' />
            </div>
            <div className={`box-content ${isHovered ? 'hovered' : ''}`}>
                <div className='default-content'>
                    <h2>Jolly</h2>
                    <h4>Web Designer</h4>
                </div>
                <div className='hover-content'>
                    <div className='hover-text'>
                    <h4>Web Designer</h4>
                    </div>
                    <div className='hover-icons'>
                    <FaInstagram size={30} />
                    <FaFacebook size={30} />
                    <FaLinkedin size={30} />
                    </div>
                  
                </div>
            </div>
        </div>

                            </div>
                            <div className='col-md-3 col-sm-12 col-lg-3 col-12'>
                            <div className='box-container'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='box-img'>
                <img src='https://qutiiz-html.vercel.app/main-html/assets/images/team/team-one-img-1.jpg' draggable="false" alt='' />
            </div>
            <div className={`box-content ${isHovered ? 'hovered' : ''}`}>
                <div className='default-content'>
                    <h2>Jolly</h2>
                    <h4>Web Designer</h4>
                </div>
                <div className='hover-content'>
                    <div className='hover-text'>
                    <h4>Web Designer</h4>
                    </div>
                    <div className='hover-icons'>
                    <FaInstagram size={30} />
                    <FaFacebook size={30} />
                    <FaLinkedin size={30} />
                    </div>
                  
                </div>
            </div>
        </div>
                            </div>
                            <div className='col-md-3 col-sm-12 col-lg-3 col-12'>
                            <div className='box-container'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='box-img'>
                <img src='https://qutiiz-html.vercel.app/main-html/assets/images/team/team-one-img-1.jpg' draggable="false" alt='' />
            </div>
            <div className={`box-content ${isHovered ? 'hovered' : ''}`}>
                <div className='default-content'>
                    <h2>Jolly</h2>
                    <h4>Web Designer</h4>
                </div>
                <div className='hover-content'>
                    <div className='hover-text'>
                    <h4>Web Designer</h4>
                    </div>
                    <div className='hover-icons'>
                    <FaInstagram size={30} />
                    <FaFacebook size={30} />
                    <FaLinkedin size={30} />
                    </div>
                  
                </div>
            </div>
        </div>
                            </div>
                            <div className='col-md-3 col-sm-12 col-lg-3 col-12'>
                            <div className='box-container'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='box-img'>
                <img src='https://qutiiz-html.vercel.app/main-html/assets/images/team/team-one-img-1.jpg' draggable="false" alt='' />
            </div>
            <div className={`box-content ${isHovered ? 'hovered' : ''}`}>
                <div className='default-content'>
                    <h2>Jolly</h2>
                    <h4>Web Designer</h4>
                </div>
                <div className='hover-content'>
                    <div className='hover-text'>
                    <h4>Web Designer</h4>
                    </div>
                    <div className='hover-icons'>
                    <FaInstagram size={30} />
                    <FaFacebook size={30} />
                    <FaLinkedin size={30} />
                    </div>
                  
                </div>
            </div>
        </div>
                            </div>
                        {/* </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurTeam