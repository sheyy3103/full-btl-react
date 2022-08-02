/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import style from './Login.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getUsers } from '../../../../services/UsersServices';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { saveUserToLocalStorage } from '../../../../redux/actions/users';
import Swal from 'sweetalert2';
import { icons } from 'react-icons/lib';

const cx = classNames.bind(style);

const initValues = {
  usname: "",
  password: ""
}

const validate = Yup.object().shape({
  usname: Yup.string().required("Please enter your username"),
  password: Yup.string().required("Please enter your password")
});


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: validate,
    onSubmit: async data => {
      let response = await getUsers();
      let users = response.data;
      let findUser = users.filter(u => {
        return data.usname === u.usname && data.password === u.password;
      });
      let user = findUser[0];
      if (user) {
        dispatch(saveUserToLocalStorage(user));
        Swal.fire({
          icon:'success',
          title:'Successfully',
          timer: 1500,
          text: 'Your account has been log in successfully'
        })
        navigate("/");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...!',
          text: 'User name or password is incorrect',
      })
      }
    }
  })

  return (
    <div className={cx('container', 'mt-5', 'd-block')}>
      <h3 className={cx('fontname', 'font-weight-bold')}>Log in</h3>
      <div className=''>
        <form onSubmit={formik.handleSubmit} className={cx('form-submit','text-left')}>
          <div className={cx('my-4')}>
            <input
              name="usname"
              className={cx("form-control", "form-input", "mt-2")}
              placeholder="Enter your username..."
              value={formik.values.usname}
              onChange={formik.handleChange}
            />
          </div>
          <span className={cx("err")}>
            {formik.errors.usname ? formik.errors.usname : ""}
          </span>
          <div className={cx('my-4')}>
            <input
              name="password" type="password"
              className={cx("form-control", "form-input",)}
              placeholder="Enter your password..."
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <span className={cx("err")}>
            {formik.errors.password ? formik.errors.password : ""}
          </span>
          <div className={cx('text-center','my-4')}>
            <button
              type="submit"
              className={cx("btn", "text-uppercase", "btn-button",'d-lg-block d-md-block d-none')}
            >
              Đăng nhập
            </button>
            <button
              type="submit"
              className={cx("btn", "text-uppercase", "btn-button2",'d-lg-none d-md-none d-block')}
            >
              Đăng nhập
            </button>
          </div>
        </form>
        <div className={cx('text-center', 'mb-4')}>
          <span>Already have no account?<Link to={"/register"} className='text-danger text-decoration-none'>Register now</Link> </span>
        </div>
      </div>
    </div>
  )
}

export default Login;