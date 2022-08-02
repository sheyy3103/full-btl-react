import { Link, NavLink } from "react-router-dom";
import { FiFacebook, FiTwitter, FiGithub } from "react-icons/fi";
import { BsTwitch, BsTelephone, BsCart, BsPerson } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import styles from "./Header.module.css";
import shoplogo from "../../../images/shoplogo.png";
import classNames from "classnames/bind";
import Search from "./Search";
import { useSelector } from "react-redux";

let cx = classNames.bind(styles)

function Header() {

    const cart = useSelector((state) => state.cart)
    

    return (
        <div>
            <section style={({ backgroundColor: 'hsl(70deg 9% 87%)' })}>
                <div className="container d-lg-block d-sm-block d-none">
                    <div className="row">
                        <div className="col-lg-5 col-sm-5 m-auto text-center ">
                            <span className="text-uppercase font-weghit-light font-italic">We hope you have a good experience at our shop</span>
                        </div>
                        <div className="col-lg-5 col-sm-5 m-auto text-center">
                            <div className="">
                                <span className="" style={({ marginRight: '10px' })}><span className="" style={({ fontSize: '' })}><BsTelephone /></span>+84382624769</span>
                                <br className="d-lg-none" />
                                <span className=""><span className="" style={({ fontSize: '20px' })}><GoMail /></span>kelvinhuynhalves1102@gmail.com</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <div className=" py-2 text-center m-auto">
                                <a href="https://www.facebook.com/sheyy3103" target="_blank" rel="noreferrer" className={cx('icon-header')}><FiFacebook /></a>
                                <a href="https://github.com/sheyy3103" target="_blank" rel="noreferrer" className={cx('icon-header')}><FiGithub /></a>
                                <a href="https://twitch.tv" target="_blank" rel="noreferrer" className={cx('icon-header')}><BsTwitch /></a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" className={cx('icon-header')}><FiTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={({ backgroundColor: 'white' })}>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 text-center m-auto d-lg-block d-md-none d-block">
                            <Link to='/' className={cx('a1')}>
                                <img height="100" width="100" src={shoplogo} alt="" />
                                <span className={cx('fontgun')} >weapon<small>s</small> shop</span>
                            </Link>
                        </div>
                        <div className="d-lg-none d-md-block d-none col-md-5 text-center m-auto">
                            <Link to='/' className={cx('a1')}>
                                <img height="75" width="75" src={shoplogo} alt="" />
                                <span className={cx('fontgunsm')} >weapon<small>s</small> shop</span>
                            </Link>
                        </div>
                        <div className="col-lg-5 col-md-5 m-auto text-center">
                            <div className={cx('form-field', 'text-left', 'pl-3')}>
                                <span style={({ fontSize: '20px' })}><IoSearchOutline /></span>
                                <Search />
                            </div>
                        </div>
                        <div className="d-lg-block d-md-none d-block col-lg-2 text-center pt-2" style={({ fontSize: '45px' })}>
                            <NavLink to='/cart' className={cx('cart')}>
                                <BsCart />
                                <small><sup className={cx('fontnum','font-italic','font-weight-light')}>{cart.cartNumber}</sup></small>
                            </NavLink>
                            <NavLink to='/login' className={cx('user')}><BsPerson /></NavLink>
                        </div>
                        <div className="d-lg-none d-md-block d-none col-md-2 text-center pt-2" style={({ fontSize: '32px' })}>
                            <NavLink to='/cart' className={cx('cart')}>
                                <BsCart />
                                <small><sup className={cx('fontnum')}>{cart.cartNumber}</sup></small>
                            </NavLink>
                            <NavLink to='/login' className={cx('user')}><BsPerson /></NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section style={({ backgroundColor: 'hsl(69deg 23% 33%)' })}>
                <div>
                    <div className="container">
                        <div>
                            <nav className="navbar navbar-expand-sm navbar-dark">
                                <button className={cx('navbar-toggler d-lg-none')} type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className={cx('navbar-toggler-icon')}></span>
                                </button>
                                <div className="collapse navbar-collapse" id="collapsibleNavId">
                                    <ul className={cx('navbar-nav')}>
                                        <li className={cx('fontnav', 'nav-item', 'text-left')}>
                                            <NavLink className="nav-link text-light" to="/">Home</NavLink>
                                        </li>
                                        <li className={cx('fontnav', 'nav-item', 'text-left')}>
                                            <NavLink className="nav-link text-light" to="/shop">Shop</NavLink>
                                        </li>
                                        <li className={cx('fontnav', 'nav-item', 'text-left')}>
                                            <NavLink className="nav-link text-light" to="">About</NavLink>
                                        </li>
                                        <li className={cx('fontnav', 'nav-item', 'text-left')}>
                                            <NavLink className="nav-link text-light" to="">Help</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header
