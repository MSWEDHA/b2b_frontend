
import { useState } from 'react';
import './Signup.css';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

const RegisterCard = () => {
    interface IUserDetails {
        FirstName: string;
        LastName: string;
        EmailID: string;
        PhoneNumber: string;
        Password: string;
        confirmPassword: string;
        active?: number;
        eulaAgreed?: string;
        userRoleID?: number;
        isDeleted?: string;
    }




    const [userDtails, setUserDetails] = useState<IUserDetails>({
        FirstName: "",
        LastName: "",
        EmailID: "",
        PhoneNumber: "",
        Password: "",
        confirmPassword: "",
        active: 1,
        eulaAgreed: "",
        userRoleID: 3,
        isDeleted: "",
    });

    const handleforsignup = async () => {
        try {
            console.log("Enter into signup user data", userDtails)
        const user = await axios.post("http://localhost:3000/create/user", userDtails).then((res)=> {
            console.log("res",res)
            // his("/")
        })
        console.log(`${user}`)

        }catch(err) {
            console.error("err",err)

        }
        

    }
    return (
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <div className="register__inputs">
                    <div className="fname__input__container reg__input__container">
                        <label className="fname__label input__label">First name</label>
                        <input type="text" className="fname__input register__input" value={userDtails?.FirstName} onChange={(e: any) => setUserDetails({
                            ...userDtails,
                            FirstName: e.target.value!
                        })} />
                    </div>
                    <div className="lname__input__container reg__input__container">
                        <label className="lname__label input__label" >Last name</label>
                        <input type="text" className="lname__input register__input" value={userDtails?.LastName} onChange={(e: any) => setUserDetails({
                            ...userDtails,
                            LastName: e.target.value!
                        })} />
                    </div>
                    <div className="EmailID__input__container reg__input__container">
                        <label className="EmailID__label input__label">EmailID</label>
                        <input type="EmailID" className="EmailID__input register__input" placeholder='example@gmail.com' value={userDtails?.EmailID} onChange={(e: any) => setUserDetails({
                            ...userDtails,
                            EmailID: e.target.value!
                        })} />
                    </div>
                    <div className="Password__input__container reg__input__container">
                        <label className="Password__label input__label">PhoneNumber</label>
                        <input type="number" className="Password__input register__input" value={userDtails?.PhoneNumber} onChange={(e: any) => setUserDetails({
                            ...userDtails,
                            PhoneNumber: e.target.value!
                        })} />
                    </div>
                    <div className="Password__input__container reg__input__container">
                        <label className="Password__label input__label">Password</label>
                        <input type="Password" className="Password__input register__input" value={userDtails?.Password} onChange={(e: any) => setUserDetails({
                            ...userDtails,
                            Password: e.target.value!
                        })} />
                    </div>
                    <div className="register__button__container">
                        <button className="register__button" onClick={handleforsignup} >Create Account</button>
                    </div>
                </div>
                <div className="register__other__actions">
                    <div className="register__login__account">Already have account? <a href="/account/login">Login</a></div>
                </div>
            </div>
        </div>
    );
}
export default RegisterCard;