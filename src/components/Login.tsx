
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
const LoginCard = () => {
    const [userDetails, setUserDetails] = useState({
        EmailID: "",
        Password: ""
    })

    const handlefrlogin =async () => {
        try {
            console.log("Enter into signup user data", userDetails)
        const user = await axios.post("http://localhost:3000/login", userDetails).then((res:any)=> {
            console.log("res",res)
            // his("/")
        })
        console.log(`${user}`)

        }catch(err) {
            console.error("err",err)

        }
    }
    return (
        <div className="login__card__container">
            <div className="login__card">
                <div className="login__header">
                    <h1>Login</h1>
                </div>
                <div className="login__inputs">
                    <div className="EmailID__input__container input__container">
                        <label className="EmailID__label input__label">EmailID</label>
                        <input type="EmailID" className="EmailID__input login__input" placeholder='example@gmail.com' value={userDetails.EmailID} onChange={(e: any) => setUserDetails({
                            ...userDetails,
                            EmailID: e.target.value!
                        })} />
                    </div>
                    <div className="password__input__container input__container">
                        <label className="password__label input__label" >Password</label>
                        <input type="password" className="password__input login__input" placeholder='**********' value={userDetails.Password} onChange={(e: any) => setUserDetails({
                            ...userDetails,
                            Password: e.target.value!
                        })}/>
                    </div>
                    <div className="login__button__container">
                        <button className="login__button" onClick={handlefrlogin} >LOGIN</button>
                    </div>
                </div>
                <div className="login__other__actions">
                    <div className="login__forgot__password">Forgot password?</div>
                    <div className="login__new__account">Don't have account? <a href="/account/register">Create account</a> </div>
                </div>
            </div>
        </div>
     );
}
export default LoginCard;