import React from 'react';
import className from 'classnames/bind';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

let cx = className.bind(styles);

function BoxSearch({ keyWord, data, reset }) {
    return (
        <div>
            <div className={cx('box-search1', 'd-lg-block d-none')}>
                <p className={cx('p-result')}>Result of: "{keyWord}"</p>
                {data.map((item) => {
                    return (
                        <Link className={cx('linkitem')} to={`/detail/${item.id}`} onClick={reset} > 
                            <div className={cx('media', 'form-item')} key={item.id}>
                                <img src={item.image} alt="" className={cx('img-search')} />
                                <div className="media-body">
                                    <h5 className={cx('fontname')}>{item.name}</h5>
                                    <small className="text-uppercase">{item.category}</small>
                                </div>
                            </div>
                        </Link>
                    )
                })}

                {/* <NavLink to='' ><span className={cx('see-more')}>See more result</span></NavLink> */}
            </div>
            <div className={cx('box-search2', 'd-lg-none d-md-block d-none')}>
                <p className={cx('p-result')}>Result of: "{keyWord}"</p>
                {data.map((item) => {
                    return (
                        <Link className={cx('linkitem')} to={`/detail/${item.id}`}>
                            <div className={cx('media', 'form-item')} key={item.id}>
                                <img src={item.image} alt="" className={cx('img-search')} />
                                <div className="media-body">
                                    <h5 className={cx('fontname')}>{item.name}</h5>
                                    <small className="text-uppercase">{item.category}</small>
                                </div>
                            </div>
                        </Link>
                    )
                })}

                {/* <NavLink to='' ><span className={cx('see-more')}>See more result</span></NavLink> */}
            </div>
            <div className={cx('box-search-3', 'd-lg-none d-md-none d-block')}>
                <p className={cx('p-result')}>Result of: "{keyWord}"</p>
                {data.map((item) => {
                    return (
                        <Link className={cx('linkitem')} to={`/detail/${item.id}`}>
                            <div className={cx('media', 'form-item')} key={item.id}>
                                <img src={item.image} alt="" className={cx('img-search')} />
                                <div className="media-body">
                                    <h5 className={cx('fontname')}>{item.name}</h5>
                                    <small className="text-uppercase">{item.category}</small>
                                </div>
                            </div>
                        </Link>
                    )
                })}

                {/* <NavLink to='' ><span className={cx('see-more')}>See more result</span></NavLink> */}
            </div>
        </div>
    )
}

export default BoxSearch