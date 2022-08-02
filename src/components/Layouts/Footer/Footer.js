import { BsTwitch } from "react-icons/bs";
import { FiFacebook, FiTwitter, FiGithub } from "react-icons/fi";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { ImCreditCard } from "react-icons/im";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import shoplogo2 from "../../../images/shoplogo2.png";
import styles from "./Footer.module.css";
import classNames from "classnames/bind";


let cx = classNames.bind(styles)

function Footer() {
    return (
        <div className="">
            <section style={({ backgroundColor: 'hsl(69deg 23% 33%)' })}>
                <div className="container text-light">
                    <div className="row pt-2">
                        <div className="col-lg-3 col-sm-6 text-left">
                            <div>
                                <a href="https://www.facebook.com/sheyy3103" target="_blank" rel="noreferrer" className="text-light" style={({ marginRight: '10px', fontSize: '18px' })}><FiFacebook /></a>
                                <a href="https://github.com/sheyy3103" target="_blank" rel="noreferrer" className="text-light" style={({ marginRight: '10px', fontSize: '18px' })}><FiGithub /></a>
                                <a href="https://twitch.tv" target="_blank" rel="noreferrer" className="text-light" style={({ marginRight: '10px', fontSize: '18px' })}><BsTwitch /></a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light" style={({ fontSize: '18px' })}><FiTwitter /></a>
                            </div>
                            <div className="py-3">
                                <img width="100" height="100" src={shoplogo2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 text-left pt-1">
                            <div>
                                <span className={cx('font-weight-bold', 'fontnav')}>learn more about us</span>
                            </div>
                            <div className="py-3">
                                <span>News</span>
                                <br />
                                <span>Shops system</span>
                                <br />
                                <span>Warranty system</span>
                                <br />
                                <span>Policy</span>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 text-left pt-1">
                            <div>
                                <span className={cx('font-weight-bold', 'fontnav')}>Payments</span>
                            </div>
                            <div style={({ fontSize: '50px' })}>
                                <span className="mr-1"><FaCcVisa /></span>
                                <span className="mr-1"><FaCcPaypal /></span>
                                <span className="mr-1"><FaCcMastercard /></span>
                                <span><ImCreditCard /></span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 text-left pt-1">
                            <div>
                                <span className={cx('font-weight-bold', 'fontnav')}>Need assistance</span>
                            </div>
                            <div className="py-3">
                                <span>+84382624769</span>
                                <br />
                                <span>kelvinhuynhalves1102@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-3">
                    <p className="text-light font-italic font-weight-light"><sup><AiOutlineCopyrightCircle /></sup><span className={cx('copyright')}> 2021 Design and development by Sheyy3103</span></p>
                </div>
            </section>
        </div>
    );
}

export default Footer;