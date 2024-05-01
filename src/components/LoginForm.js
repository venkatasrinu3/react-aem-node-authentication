import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../redux/LoginReducer';
import {useLocation, useNavigate} from "react-router-dom";
import "./LoginForm.css"

const LoginForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({ 'firstName': '', 'lastName': '', 'mobileNumber': '', 'emailId': '' })
    const [showData, setShowData] = useState(false);
    const loginState = useSelector(state => state)
    const changeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(loginAction.changestate({ cnt: 3, ...form }))
    }

    const { firstName, lastName, mobileNumber, emailId } = loginState.loginUserInfo
    const handleShowData = () => {
        setShowData(!showData)
    }
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToReactLearning = () => {
        navigate("/learn-react",{state: {name: "Srivatsava"}});
    }
    return (
        <>
            <form onSubmit={handleSubmitForm} className="form-container">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor='fName'>First Name</label>
                    <input type='text' id='fName' value={form.firstName} name='firstName' onChange={changeForm} className="form-control mw-200 mb-2" />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='lName'>Last Name</label>
                    <input type='text' id='lName' value={form.lastName} name='lastName' onChange={changeForm} className="form-control mw-200 mb-2" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor='mobileNumber'>Mobile Number</label>
                    <input type='number' id='mobileNumber' value={form.mobileNumber} name='mobileNumber' onChange={changeForm} className="form-control mw-200 mb-2" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor='email'>Email ID</label>
                    <input type='email' id='email' value={form.emailId} name='emailId' onChange={changeForm} className="form-control mw-200 mb-2" />
                </div>
                <button type='submit' className="my-3 btn btn-outline-success">
                    Submit
                </button>
                <div className='acc-container'>
                    <div className='d-flex justify-content-between'>
                        <h4 className="mb-0 text-3xl">Employee Details</h4>
                        <span className='cursor-pointer' onClick={handleShowData}>
                            {(firstName && lastName && mobileNumber && emailId) &&
                                <i className="material-icons" >{!showData ? <>arrow_drop_down</> : <>arrow_drop_up</>}</i>
                            }
                        </span>
                    </div>
                    {showData &&
                        <table className='mt-3'>
                            <thead>
                                <tr>
                                    <th style={{ width: 200 }}>FirstName</th>
                                    <th style={{ width: 200 }}>LastName</th>
                                    <th style={{ width: 200 }}>Mobile Number</th>
                                    <th style={{ width: 200 }}>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{mobileNumber}</td>
                                    <td>{emailId}</td>
                                </tr>
                            </tbody>
                        </table>
                    }
                </div>
            </form>
            <button className='txt-btn' onClick={navigateToReactLearning}>Click here to learn react</button>
        </>
    )
}
export default LoginForm