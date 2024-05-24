import React from 'react'
import './sub.css'
import logo from '../../Assets/imgpsh_fullsize_anim.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'

function SubFooter() {
    return (
        <div className='sub-main '>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-lg-12'>
                        <div className='sub-content'>
                            <div className='sub-logo'>
                                <img src={logo} alt='logo' />
                            </div>
                            <div className='sub-link'>
                                <h4>
                                    LET'S WORK TOGETHER JUST DROP ME A LINE - <span>INFO@EXAMPLE.COM</span>
                                </h4>
                            </div>
                            <div className='sub-icons'>
                                <i>
                                    <FaInstagram size={30} />
                                </i>
                                <i>
                                    <FaFacebook size={30} />
                                </i>
                                <i>
                                    <FaLinkedin size={30} />
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubFooter