import React, { Component } from 'react'
import './Footer.css';
import {
    EntypoTwitter, EntypoPinterest,
    EntypoFacebook, EntypoInstagram,
    EntypoLinkedin
} from 'react-entypo-icons'

class Footer1 extends Component {
    render() {
        return (
            <div className="footerGeneral">
                {/* Footer1 */}
                <div className="footerAll">
                    <div className="More">
                        <h2>More</h2>
                        <li className="contactLink" ><a href="#">Partnership</a></li>
                        <li className="contactLink" ><a href="#">Customer care</a></li>
                        <li className="contactLink" ><a href="#">Policy</a></li>
                    </div>

                    <div className="Contact">
                        <h2>Contacts</h2>

                        <div className="iconLine">
                            <li className="contactLink" > <a href="https://www.facebook.com/"><EntypoFacebook className="entypo-icon entypo--EntypoFacebook" /></a></li>

                            <div className="iconLine1">
                                <li className="contactLink" ><a href="https://www.twitter.com/"><EntypoTwitter className=".entypo-icon entypo--EntypoTwitter" /></a></li>
                            </div>

                            <li className="contactLink" ><a href="https://www.linkedin.com/"><EntypoLinkedin className=".entypo-icon entypo--EntypoLinkedin" /></a></li>

                            <div className="iconLine2">
                                <li className="contactLink" ><a href="https://www.instagram.com/"> <EntypoInstagram className=".entypo-icon entypo--EntypoInstagram" /></a></li>
                            </div>

                            <li className="contactLink" ><a href="https://www.pinterest.com/"> <EntypoPinterest className=".entypo-icon entypo--EntypoPinterest" /></a></li>
                        </div>

                    </div>

                    <div className="business">
                        <h2> Business</h2>
                        <li className="contactLink" ><a href="#">Boutique</a></li>
                        <li className="contactLink"><a href="#">Bureau de change</a></li>
                        <li className="contactLink"><a href="#">Foods</a></li>
                        <li className="contactLink"><a href="#">Special Services</a></li>
                    </div>

                    <div className="locations">
                        <h2>Locations</h2>
                        <li className="contactLink" ><a href="#">Nigeria</a></li>
                        <li className="contactLink" ><a href="#">Ghana</a></li>
                        <li className="contactLink" ><a href="#">USA</a></li>
                        <br />
                    </div>
                </div>

                <div className="greenLogo">
                    <img src="/assets/greensicon2.png" alt="image" />
                </div>
                <hr />
            </div>
        )
    }
}

export default Footer1