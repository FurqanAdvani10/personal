import React from 'react'
import './main.css'
import image from '../../Assets/project-one-img-2.jpg'

function Ready() {
    return (
        <div className='ready-main section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-sm-12'>
                        <div className='ready-img-container'>
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-sm-12'>
                        <div className='ready-text-container'>
                            <div className='ready-content'>
                                <div className='ready-heading'>
                                    <h4>
                                        GET TO KNOW US
                                    </h4>
                                    <h1>
                                        We’re ready to grow your business with us
                                    </h1>
                                </div>
                                <div className='sub-heading'>
                                    <p className='p-0 m-0'>We’re committed to delivering the best digital marketing for your businesses</p>
                                </div>
                                <div className='ready-para'>
                                    <p className='p-0 m-0'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, simply free text by injected humour, or randomised.</p>
                                </div>
                                <div className='ready-range'>
                                    <h4>Graphic Designing</h4>
                                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ready