import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import { baseUrl } from '../Utilities/BaseUrl'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export default function Register() {

    const notify = (msg, type) => toast[type](msg);

    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();

    // with Yup
    let validationSchema = Yup.object({
        name: Yup.string().min(3).max(15).required(' required ya malem'),
        email: Yup.string().email().required(),
        password: Yup.string().matches(/^[A-Z][a-z0-9A-Z@#%$]{5,}$/, 'password must match pattern').required(),
        rePassword: Yup.string().oneOf([Yup.ref('password')], 'not match').required(),
    })

    // with Formik
    // A custom validation function. This must return an object
    // which keys are symmetrical to our values/initialValues
    // const validate = values => {
    //     const errors = {};
    //     if (!values.name) {
    //         errors.name = 'Required';
    //     } else if (values.name.length > 15) {
    //         errors.name = 'Must be 15 characters or less';
    //     }

    //     if (!values.email) {
    //         errors.email = 'Required';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'Invalid email address';
    //     }

    //     if (!values.password) {
    //         errors.password = 'Required';
    //     } else if (!/^[A-Z][a-z0-9A-Z@#%]$/i.test(values.password)) {
    //         errors.password = 'Invalid password address';
    //     }

    //     if (!values.rePassword) {
    //         errors.rePassword = 'Required';
    //     } else if (values.rePassword != values.password) {
    //         errors.rePassword = 'Password is not matched ';
    //     }

    //     return errors;
    // };

    let registerationFormik = useFormik({
        initialValues: {
            name: '',
            email: "",
            password: "",
            rePassword: ""
        },
        // validate,
        validationSchema,
        onSubmit: (values) => {
            setLoading(true)
            // console.log(values);
            // alert(JSON.stringify(values, null, 2));
            // send api
            axios.post(`${baseUrl}/auth/signup`, values).then((data) => {
                console.log(data);

                if (data.status == 201) {
                    setLoading(false);
                    notify("success", "success");
                    navigate('/login');
                }
            }).catch((error) => {
                if (error.response.status == 409) {
                    setLoading(false)
                    notify(error.response.data.message, "error");
                    // alert(error.response.data.message)
                }
                console.log(error);
            })
        },
    })

    // console.log(registerationFormik.errors);

    return (
        <div className="w-50 m-auto my-5">
            <h2>Reister Now</h2>
            <form onSubmit={registerationFormik.handleSubmit}>

                <label htmlFor="name">Name</label>
                <input onBlur={registerationFormik.handleBlur} onChange={registerationFormik.handleChange} value={registerationFormik.values.name} type="text" name="name" id="name" className='form-control my-3' />
                {registerationFormik.errors.name && registerationFormik.touched.name ? <div className="alert alert-danger">{registerationFormik.errors.name}</div> : null}


                <label htmlFor="email">Email</label>
                <input onBlur={registerationFormik.handleBlur} onChange={registerationFormik.handleChange} value={registerationFormik.values.email} type="email" name="email" id="email" className='form-control my-3' />
                {registerationFormik.errors.email && registerationFormik.touched.email ? <div className="alert alert-danger">{registerationFormik.errors.email}</div> : null}

                <label htmlFor="password">Password</label>
                <input onBlur={registerationFormik.handleBlur} onChange={registerationFormik.handleChange} value={registerationFormik.values.password} type="password" name="password" id="password" className='form-control my-3' />
                {registerationFormik.errors.password && registerationFormik.touched.password ? <div className="alert alert-danger">{registerationFormik.errors.password}</div> : null}


                <label htmlFor="rePassword">rePassword</label>
                <input onBlur={registerationFormik.handleBlur} onChange={registerationFormik.handleChange} value={registerationFormik.values.rePassword} type="password" name="rePassword" id="rePassword" className='form-control my-3' />
                {registerationFormik.errors.rePassword && registerationFormik.touched.rePassword ? <div className="alert alert-danger">{registerationFormik.errors.rePassword}</div> : null}

                <button disabled={!(registerationFormik.isValid && registerationFormik.dirty && !loading)} className='btn bg-main text-white'>
                    {!loading ? "Register" : <i className='fas fa-spin fa-spinner'></i>}
                </button>
            </form>
        </div>
    )
}
