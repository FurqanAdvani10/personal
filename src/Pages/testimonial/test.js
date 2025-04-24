import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import './../../../node_modules/swiper/swiper.css';
import './test.css'

function Testimonial() {
  return (
    <div className='testimonial-main section-padding'>
    <Container>
    <Row >
        <Col sm={12} md={12} >
        <div className='our-heading'>
                            <h4>
                            CUSTOMER FEEDBACKS
                            </h4>
                            <h1>
                            WHAT THEY’RE TALKING ABOUT COMPANY?
                            </h1>
                        </div>
       
        </Col>
    </Row>


    <Row>
      <Col md={12} sm={12}>
        <div className='test-box'>
  <Swiper
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 20 },
    480: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 50 },
    1024: { slidesPerView: 2, spaceBetween: 50 },
  }}
  freeMode
  centeredSlides
  grabCursor
  centeredSlidesBounds
  >

<Col md={6} sm={12}>
  <SwiperSlide>

  <figure className="snip1192 ">
<blockquote>My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.</blockquote>
<div class="author">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg" alt="sq-sample29"/>
<h5>Eleanor Faint<span> LittleSnippets</span></h5>
</div>
</figure>

</SwiperSlide>
</Col>
  <SwiperSlide>
    <figure className="snip1192">
<blockquote>My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.</blockquote>
<div className="author">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg" alt="sq-sample29"/>
<h5>Eleanor Faint<span> LittleSnippets</span></h5>
</div>
</figure>
</SwiperSlide>
  <SwiperSlide
  ><figure className="snip1192 hover">
<blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.</blockquote>
<div className="author">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24"/>
<h5>Max Conversion<span> LittleSnippets</span></h5>
</div>
</figure>
</SwiperSlide>
  <SwiperSlide>
  <figure className="snip1192 hover">
<blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.</blockquote>
<div className="author">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24"/>
<h5>Max Conversion<span> LittleSnippets</span></h5>
</div>
</figure>
  </SwiperSlide>
  <SwiperSlide>
  <figure className="snip1192 hover">
<blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.</blockquote>
<div className="author">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24"/>
<h5>Max Conversion<span> LittleSnippets</span></h5>
</div>
</figure>
  </SwiperSlide>
  <SwiperSlide>
    <figure class="snip1192 hover">
<blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.</blockquote>
<div className="author">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24"/>
<h5>Max Conversion<span> LittleSnippets</span></h5>
</div>
</figure>
</SwiperSlide>
  <SwiperSlide>
  <figure className="snip1192 hover">
<blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.</blockquote>
<div class="author">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24"/>
<h5>Max Conversion<span> LittleSnippets</span></h5>
</div>
</figure>
  </SwiperSlide>
  <SwiperSlide>
  <figure className="snip1192 hover">
<blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.</blockquote>
<div className="author">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24"/>
<h5>Max Conversion<span> LittleSnippets</span></h5>
</div>
</figure>
  </SwiperSlide>
</Swiper>
</div>
</Col>
</Row>

</Container>

</div>
  )
}

export default Testimonial