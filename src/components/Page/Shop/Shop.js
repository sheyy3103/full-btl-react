import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as ProductServices from "../../../services/ProductServices";
import classNames from "classnames/bind";
import styles from "./Shop.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cart";
import Swal from "sweetalert2";

let cx = classNames.bind(styles)

function Shop() {
    const [products, setProducts] = useState([]);
    const [filterKey, setFilterKey] = useState('_page=1&_limit=6');
    const [sort, setSort] = useState('');

    useEffect(() => {
        const filterByKey = async (filterKey) => {
            const data = await ProductServices.filterByKey(filterKey);
            setProducts(data);
        }
        filterByKey(filterKey);
    }, [filterKey])
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
            <h1 className={cx('pb-1', 'fontnav', 'fontheadtext', 'btn', 'text-danger')} onClick={() => setFilterKey('_page=1&_limit=6')}>shop</h1>
            <br className={cx('pb-3')} />
            <div className="row pb-3">
                <div className="col-lg-3 col-md-4 mb-3">
                    <div className="text-left ">
                        <h2 className={cx('fontnav', 'font-weight-bold')}>Filter by</h2>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6 col-6">
                                <h4 className="font-weight-bold" >Category</h4>
                                <span className={cx('btn', 'filterline')} name="gun" onClick={() => setFilterKey('category=gun')}>Gun</span>
                                <br />
                                <span className={cx('btn', 'filterline')} name="achery" onClick={() => setFilterKey('category=achery')}>Achery</span>
                                <br />
                                <span className={cx('btn', 'filterline')} name="knife" onClick={() => setFilterKey('category=knife')}>Knife</span>
                                <br />
                                <span className={cx('btn', 'filterline')} name="backpack" onClick={() => setFilterKey('category=backpack')}>Backpack</span>
                                <br />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6 col-6">
                                <h4 className="font-weight-bold" >Price</h4>
                                <span className={cx('btn', 'filterline')} onClick={() => setFilterKey('price_gte=1&price_lte=150')}><small>$</small>1.00 ~ 150.00</span>
                                <br />
                                <span className={cx('btn', 'filterline')} onClick={() => setFilterKey('price_gte=151&price_lte=200')}><small>$</small>151.00 ~ 200.00</span>
                                <br />
                                <span className={cx('btn', 'filterline')} onClick={() => setFilterKey('price_gte=201&price_lte=300')}><small>$</small>201.00 ~ 300.00</span>
                                <br />
                                <span className={cx('btn', 'filterline')} onClick={() => setFilterKey('price_gte=300&price_lte=350')}><small>$</small>301.00 ~ 350.00</span>
                                <br />
                            </div>
                        </div>
                        <h2 className={cx('fontnav', 'font-weight-bold')}>sort by</h2>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6 col-6">
                                <h4 className="font-weight-bold" >Name</h4>
                                <span className={cx('btn', 'filterline')} onClick={() => { setFilterKey('_sort=name&_order=asc&_page=1&_limit=6'); setSort('_sort=name&_order=asc') }}>A - Z</span>
                                <br />
                                <span className={cx('btn', 'filterline')} onClick={() => { setFilterKey('_sort=name&_order=desc&_page=1&_limit=6'); setSort('_sort=name&_order=desc') }}>Z - A </span>
                                <br />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6 col-6">
                                <h4 className="font-weight-bold" >Price</h4>
                                <span className={cx('btn', 'filterline')} onClick={() => { setFilterKey('_sort=price&_order=asc&_page=1&_limit=6'); setSort('_sort=price&_order=asc') }}>Ascending</span>
                                <br />
                                <span className={cx('btn', 'filterline')} onClick={() => { setFilterKey('_sort=price&_order=desc&_page=1&_limit=6'); setSort('_sort=price&_order=desc') }}>Descending</span>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8">
                    <div className="row">
                        {products.map((product) => {
                            return (
                                <div className="col-lg-4 col-sm-6" key={product.id}>
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
                                                <button className="btn btn-sm btn-outline-secondary text-uppercase font-weight-bolder" onClick={() => add(product)}>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={cx('container')}>
                        <nav >
                            <ul className="pagination justify-content-center">
                                <li className="page-item mx-1"><span className={cx('page-link','text-secondary')} onClick={() => { setFilterKey(`${sort}&_page=1&_limit=6`) }}>1</span></li>
                                <li className="page-item mx-1"><span className={cx('page-link','text-secondary')} onClick={() => { setFilterKey(`${sort}&_page=2&_limit=6`) }}>2</span></li>
                                <li className="page-item mx-1"><span className={cx('page-link','text-secondary')} onClick={() => { setFilterKey(`${sort}&_page=3&_limit=6`) }}>3</span></li>
                                <li className="page-item mx-1"><span className={cx('page-link','text-secondary')} onClick={() => { setFilterKey(`${sort}&_page=4&_limit=6`) }}>4</span></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;