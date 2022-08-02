import React, { useEffect, useState } from 'react';
import className from 'classnames/bind';
import styles from "./Header.module.css";
import BoxSearch from './BoxSearch';
import * as ProductServices from "../../../services/ProductServices"

let cx = className.bind(styles);

function Search() {
    const [keyWord, setKeyWord] = useState('');
    const [showProducts, setShowProducts] = useState([]);
    const reset = () => {
        setKeyWord('');
    };

    useEffect(()=>{
        const searchByKeyName = async (keyWord) => {
            const data = await ProductServices.searchByKey(keyWord);
            setShowProducts(data); //
        }
        const timeOut = setTimeout(() => {
            searchByKeyName(keyWord);
        },900);
        return () => clearTimeout(timeOut);
    },[keyWord])

    return (

        <>
            <input type="text" className={cx('ipsearch', 'px-3 py-2')} placeholder="Enter product's name..."
                onChange={(e) => setKeyWord(e.target.value.trim())} />
            {keyWord !== '' && <BoxSearch keyWord={keyWord} data={showProducts} reset={reset}/>}
        </>
    )
}

export default Search