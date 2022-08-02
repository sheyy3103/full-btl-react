import styles from "./Home.module.css";
import carousel1 from "../../../images/carousel1.png";
import carousel2 from "../../../images/carousel2.png";
import carousel3 from "../../../images/carousel3.png";
import carousel4 from "../../../images/carousel4.png";
import card1 from "../../../images/card1.png";
import card2 from "../../../images/card2.png";
import MainContent from "./MainContent/MainContent";
import classNames from "classnames/bind";

let cx = classNames.bind(styles)

function Home() {
    return (
        <div className="container py-3">
            <div id="carouselId" className="carousel slide" data-ride="carousel" data-interval="3000">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={carousel1} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={carousel2} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={carousel3} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={carousel4} alt="" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <hr />
            <div className="row py-2">
                <div className="col-lg-6">
                    <div className="card mb-4 shadow-sm">
                        <img className="card-img-top" src={card1} alt="" />
                        <div className="card-body">
                            <h2 className={cx('font-weight-bold', 'fontcate')}>weapon<small>s</small></h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-4 shadow-sm">
                        <img className="card-img-top" src={card2} alt="" />
                        <div className="card-body">
                            <h2 className={cx('font-weight-bold', 'fontcate')}>Backpack<small>s</small></h2>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h1 className={cx('font-weight-bold', 'fontnav')}>popular</h1>
                <MainContent />
            </div>
        </div>

    );
}

export default Home;