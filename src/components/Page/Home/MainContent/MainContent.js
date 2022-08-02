import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import brand1 from "../../../../images/brand1.png";
import brand2 from "../../../../images/brand2.png";
import brand3 from "../../../../images/brand3.png";
import brand4 from "../../../../images/brand4.png";
import brand5 from "../../../../images/brand5.png";
import brand6 from "../../../../images/brand6.png";
import classNames from "classnames/bind";
import styles from "./MainContent.module.css";
import * as ProductServices from "../../../../services/ProductServices"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/actions/cart";
import Swal from "sweetalert2";

let cx = classNames.bind(styles)

function MainContent() {
    const [products, setProducts] = useState([]);
    const getData = () => {
        const getDataApi = async () => {
            const data = await ProductServices.getAllProducts();
            setProducts(data);
        }
        getDataApi();
    }
    useEffect(() => {
        getData();
    }, [])
    const dispatch = useDispatch();
    const add = (product) => {
        dispatch(addToCart(product));
        Swal.fire({
            icon: "success",
            title: 'Successfully',
            text: 'This item has been added to your cart',
            timer: 1500
        })

    }

    return (
        <div className="container pb-2 pt-3">
            <div className="row pb-3">
                {
                    products.map((product) => {
                        return product.id < 13 ? (
                            <div className="col-lg-3 col-sm-6" key={product.id}>
                                <div className="card mb-3 shadow-sm">
                                    <img className="card-img-top" src={product.image} alt="" />
                                    <div className="card-body">
                                        <span className={cx('card-text', 'fontcontent')}>{product.name}</span>
                                        <br />
                                        <small className="font-weight-light text-uppercase">{product.category}</small>
                                        <br></br>
                                        <span className="text-danger"><small>$ </small>{product.price}</span>
                                        <br />
                                        <div className="text-center pt-2">
                                            <NavLink to={`/detail/${product.id}`}><button className="btn btn-sm btn-outline-secondary text-uppercase font-weight-bolder">view</button></NavLink>
                                        </div>
                                        <div className="text-center pt-2">
                                            <button
                                                onClick={() => add(product)}
                                                className="btn btn-sm btn-outline-secondary text-uppercase font-weight-bolder">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                            : (
                                <div key={product.id}></div>
                            )
                    })
                }
            </div>
            <div className="pb-3">
                <NavLink className={cx('btn btn-outline-danger font-weight-bolder py-2', 'fontnav')} to="/shop">view all products</NavLink>
            </div>
            <hr />
            <div>
                <h1 className={cx('fontcontent2')}>What they're saying</h1>
                <div className="row">
                    <small className={cx('alignment')}>This shop is one of the most reputable store I've never seen. About quality, you don't have to doubt. They always provide us weapons with the highest quality. Btw, Purchasing service and customer consultation are very dedicated. Payment methods are also flexible and convenient. We really had a very good experience here. 1 BILLION STARS FOR SHOP!</small>
                    <br />
                </div>
                <div className="row">
                    <div className={cx('col-lg-2', 'col-sm-2', 'col-4')}>
                        <img className={cx('img-brand')} src={brand1} alt="" />
                    </div>
                    <div className={cx('col-lg-2', 'col-sm-2', 'col-4')}>
                        <img className={cx('img-brand')} src={brand2} alt="" />
                    </div>
                    <div className={cx('col-lg-2', 'col-sm-2', 'col-4')}>
                        <img className={cx('img-brand')} src={brand3} alt="" />
                    </div>
                    <div className={cx('col-lg-2', 'col-sm-2', 'col-4')}>
                        <img className={cx('img-brand')} src={brand4} alt="" />
                    </div>
                    <div className={cx('col-lg-2', 'col-sm-2', 'col-4')}>
                        <img className={cx('img-brand')} src={brand5} alt="" />
                    </div>
                    <div className={cx('col-lg-2', 'col-sm-2', 'col-4')}>
                        <img className={cx('img-brand')} src={brand6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;