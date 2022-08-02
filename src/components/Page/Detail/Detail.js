import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as ProductServices from "../../../services/ProductServices";
import classNames from "classnames/bind";
import styles from "./Detail.module.css";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cart";
import Swal from "sweetalert2";
let cx = classNames.bind(styles)

function Detail() {
    let { id } = useParams();
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            const data = await ProductServices.detailProducts(id);
            setQuantity(1);
            setProduct(data);
        }
        const getAll = async () => {
            const data = await ProductServices.getAllProducts();
            setProducts(data);
        }
        getProduct();
        getAll();
    }, [id]);
    const add = (product, quantity) => {
        dispatch(addToCart(product, quantity));
        Swal.fire({
            icon: "success",
            title: 'Successfully',
            text: 'This item has been added to your cart',
            timer: 1500
        })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8">
                    <h1 className={cx('fonthead', 'font-weight-bold pt-3', 'detailtext')}>details <small className={cx('smallid', 'font-weight-light')}>ID: {product.id}</small></h1>
                </div>
                <div className="col-lg-4 col-md-4">

                </div>
            </div>

            <div className="row">
                <div className="col-lg-7 col-md-7">
                    <img className={cx('card-img-top', 'cardimg')} src={product.image} alt="" />
                </div>

                <div className="col-lg-5 col-md-5 text-left">
                    <h2 className={cx('my-3', 'fontcontent')}>{product.name}</h2>
                    <h4 className={cx('my-3', 'font-weight-light', 'fonthead', 'smallcategory')}>{product.category}</h4>
                    <p className={cx('smallcontent')}>{product.content}</p>
                    <h3 className="text-danger">Price: <small>$</small>{product.price}</h3>
                    <div className="form-group">
                        <span>Quantity: </span>
                        <span>
                            <button className={cx('btn-quantity')} onClick={() => {
                                if (quantity < 2) {
                                    setQuantity(1);
                                } else {
                                    setQuantity(quantity - 1);
                                }
                            }}><AiOutlineMinus /></button>
                        </span>
                        <input value={quantity} onChange={(e) => {e.target.value > 0 ? setQuantity(e.target.value): setQuantity(1)}} className={cx('ip-quantity')} />
                        <span>
                            <button className={cx('btn-quantity')} onClick={() => setQuantity(quantity + 1)}><AiOutlinePlus /></button>
                        </span>
                    </div>
                    <div className="my-4 d-lg-block d-md-none d-block">
                        <button className={cx('btn-rounded', 'btn btn-danger', 'cartplus', '')}>buy now</button>
                        <button className={cx('btn-rounded', 'ml-1', 'btn btn-dark', 'cartplus')} onClick={() => add(product, quantity)}><BsCartPlus className="mb-1" /> add to cart</button>
                    </div>
                    <div className="my-4 d-lg-none d-md-block d-none">
                        <button className={cx('btn-rounded', 'btn btn-danger', 'cartplus2')}>buy now</button>
                        <button className={cx('btn-rounded', 'ml-1', 'btn btn-dark', 'cartplus2')} onClick={() => add(product, quantity)}><BsCartPlus className="mb-1" /> add to cart</button>
                    </div>
                </div>
            </div>
            <div className="d-lg-block d-md-block d-none">
                <h2 className={cx('mt-5 mb-3', 'fonthead', 'font-weight-bold')}>Any products</h2>
                <div className="row">
                    {
                        products.map((item) => {
                            return item.category === product.category && item.id !== product.id ? (
                                <div className="col-lg col-md" key={item.id}>
                                    <div className="card mb-3 shadow-sm">
                                        <img className="card-img-top" src={item.image} alt="" />
                                        <div className="card-body">
                                            <div className="items-align-center">
                                                <span className={cx('card-text d-lg-block d-none', 'fontcontent')}>{item.name}</span>
                                                <span className={cx('card-text d-lg-none', 'fontcontent2')}>{item.name}</span>
                                            </div>
                                            <br />
                                            <div className="items-align-center">
                                                <Link to={`/detail/${item.id}`}><button className={cx('btn btn-sm btn-outline-secondary text-uppercase font-weight-bolder d-lg-block d-none', 'btnview')}>view</button></Link>
                                                <Link to={`/detail/${item.id}`}><button className={cx('btn btn-sm btn-outline-secondary text-uppercase font-weight-bolder d-lg-none', 'btnview2')}>view</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                                : (
                                    <div key={item.id}></div>
                                )
                        })
                    }
                </div>
            </div>
        </div >
    );
}

export default Detail;