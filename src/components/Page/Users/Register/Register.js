/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import style from './Register.module.css';
import classNames from 'classnames/bind';

// import formik + yup
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { register } from '../../../../services/UsersServices';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const cx = classNames.bind(style);

const initialValues = {
    // trong này là mấy cái trường ở form.
    usname: "",
    email: "",
    password: ""
}

const validationSchema = Yup.object().shape({
    // validate các trường ở đây
    usname: Yup.string().required("This field cannot be empty"),
    email: Yup.string().required("This field cannot be empty").email("Invalid format email"),
    password: Yup.string().required("This field cannot be empty").min(8, "Password from 8 to 18 character").max(18, "Password from 8 to 18 character")

    // string() -> kiểu dữ liệu của input
    // require() -> bắt buộc phải nhập khi submit
    // email() -> validate định dạng email
    // min max() -> độ dài ký tự của input
})

function Register() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        // giá trị khởi tạo của form
        validationSchema,
        // validate
        onSubmit: async (user) => {
            let response = await register(user);
            Swal.fire({
                icon: 'success',
                title:'successfully',
                text:'Your account have been registered successfully',
                timer: 1500
            })
            response.status === 201 && navigate("/login");
            // có dữ liệu r thì thêm mới thôi >
        }
    });

    return (
        <div className={cx('container', 'mt-5', 'd-block')}>
            <h3 className={cx('fontname','font-weight-bold')}>Register</h3>
            <div className=''>
                <form onSubmit={formik.handleSubmit} className={cx('form-submit','text-left')}>
                    <div className={cx('my-4')}>
                        <input
                            name="usname" type="text" placeholder="Enter your user name..."
                            className={cx("form-control", "form-input",)}
                            onChange={formik.handleChange}
                            value={formik.values.usname}
                        // 2 way binding. -> chắc thầy giải thích r

                        />
                    </div>
                    {/* nếu có lỗi thì showw ở đây */}
                    <span className={cx("err")}>
                        {formik.errors.usname ? formik.errors.usname : ""}
                    </span>


                    <div className={cx('my-4')}>
                        <input
                            name="email" type="email "
                            className={cx("form-control", "form-input",)}
                            onChange={formik.handleChange} placeholder="Enter your email address..."
                            value={formik.values.email}
                        />
                    </div>
                    <span className={cx("err")}>
                        {formik.errors.email ? formik.errors.email : ""}
                    </span>

                    <div className={cx('my-4')}>
                        <input
                            name="password" type="password"
                            className={cx("form-control", "form-input",)}
                            onChange={formik.handleChange} placeholder="Enter your password..."
                            value={formik.values.password}
                        />
                    </div>
                    <span className={cx("err")}>
                        {formik.errors.password ? formik.errors.password : ""}
                    </span>
                    <div className={cx('text-center','my-4')}>
                    <button
                        type="submit"
                        className={cx("btn", "text-uppercase", "btn-button","d-lg-block d-md-block d-none")}
                    >
                        Register
                    </button>
                    <button
                        type="submit"
                        className={cx("btn", "text-uppercase", "btn-button2","d-lg-none d-md-none")}
                    >
                        Register
                    </button>
                    </div>
                </form>
                <div className="text-center mb-4">
                    <span>Already have an account ? </span><Link to="/login" className="text-danger text-decoration-none">Login here.</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;