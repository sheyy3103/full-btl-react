import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import styles from "./Cart.module.css";
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../redux/actions/cart';

let cx = classNames.bind(styles)

function InputCart({ quantity,id }) {
    const [inp, setInp] = useState(quantity);
    useEffect(() => {
        setInp(quantity);
    }, [quantity])
    const setValue = (value) => {
        setInp(value)
    }
    const dispatch = useDispatch();
    const update = () => {
        let item ={
            id: id,
            quantity: inp
        }
        dispatch(updateCart(item));
    }

    return (
        <>
            <input name="quantity" className={cx('ip-quantity')} value={inp} onChange={(e) => e.target.value > 0 ? setValue(e.target.value) : setValue(1)} onBlur={() => update()} />
        </>
    )
}

export default InputCart