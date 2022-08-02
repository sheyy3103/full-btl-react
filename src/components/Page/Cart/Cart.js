import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./Cart.module.css";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { removeFromCart, updateCart } from "../../../redux/actions/cart";
import InputCart from "./InputCart";
import Swal from "sweetalert2";

let cx = classNames.bind(styles)

function Cart() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const update = (e, data) => {
        if (e.target.name === "plus") {
            let item = {
                id: data.id,
                quantity: data.quantity +1
            }
            dispatch(updateCart(item));
        }
        if (e.target.name === "minus") {
            if (data.quantity === 1) {
                let item = {
                    id: data.id,
                    quantity: data.quantity
                }
                dispatch(updateCart(item));
                
            } else {
                let item = {
                    id: data.id,
                    quantity: data.quantity -1
                }
                dispatch(updateCart(item));
                
            }
            
        }

    }
    const remove = (item) =>{   
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: false
          }).then((result) => {
            if (result.isConfirmed) {
            dispatch(removeFromCart(item));
              Swal.fire(
                'Deleted!',
                'Your item has been deleted.',
                'success'
              )
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              Swal.fire(
                'Cancelled',
                'Your item is safe :)',
                'error'
              )
            }
          })
    }

    return (
        <div className="container">
            <div className={cx('row my-3')}>
                {cart.cartItems.map((item) => {
                    return (
                        <div className="col-lg-6 col-md-6" key={item.id}>
                            <div className="card my-3">
                                <div className="thumbnail">
                                    <span className={cx('close', 'btn-close', 'btn')} onClick={() => remove(item)}><AiOutlineClose /></span>
                                    <div className="row no-gutters">


                                        <div className="col-lg-4">
                                            <img src={item.image} alt="..." className={cx('card-img')} />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="card-body text-left">
                                                <h5 className={cx('card-title', 'fontname')}>{item.name}</h5>
                                                <p className="card-text text-danger text-uppercase">Price: <small>$</small>{item.price}</p>
                                                <div className={cx('form-group', 'form-quantity')}>
                                                    <button className={cx('btn-quantity')} name="minus" onClick={(e) => update(e, item)}><AiOutlineMinus /></button>
                                                    <InputCart quantity={item.quantity} id={item.id} />
                                                    <button className={cx('btn-quantity')} name="plus" onClick={(e) => update(e, item)}><AiOutlinePlus /></button>
                                                </div>
                                                <p className="card-text text-danger text-uppercase">Total: <small>$</small>{item.price * item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Cart;