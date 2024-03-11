import React from 'react'
import "../Style/Style.css"
const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 col-sm-12">
                            <h2>Useful Links</h2>
                            <ul class="list-unstyled link-list">
                                <li><a ui-sref="about" href="#about">About us</a><i class="fa fa-angle-right"></i></li>
                                <li><a ui-sref="portfolio" href="#Services">Services</a><i class="fa fa-angle-right"></i></li>
                                <li><a ui-sref="products" href="#logins">Logins</a><i class="fa fa-angle-right"></i></li>
                                <li><a ui-sref="gallery" href="#gallery">Gallery</a><i class="fa fa-angle-right"></i></li>
                                <li><a ui-sref="contact" href="#contact_us">Contact us</a><i class="fa fa-angle-right"></i></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-sm-12 map-img">
                            <h2>Contact Us</h2>
                            <address class="md-margin-bottom-40">
                                <p>D-204, Hole Town South West, Delhi-110096, </p>
                                <p>India Phone: 1122334455 </p>
                                <p>Email: info@gmail.com </p>
                                <p>Timing: 9 am to 8 pm </p>
                            </address>
                        </div>
                    </div>
                </div>


            </footer>
        </>
    )
}

export default Footer