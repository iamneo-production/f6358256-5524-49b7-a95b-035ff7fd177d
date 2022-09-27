import React, {useState,setState} from 'react';
import './style.css'
function RegistrationForm() {
    
    const [email, setemail] = useState(null);
    const [Username, setusername] = useState(null);
    const [mobileNumber, setcontact] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setemail(value);
        }
        if(id === "Username"){
            setusername(value);
        }
        if(id === "mobileNumber"){
            setcontact(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(email,Username,mobileNumber,password,confirmPassword);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="firstName">Email </label>
                    <input className="form__input" type="email" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="Enter email"/>
                </div>
                <div className="Username">
                    <label className="form__label" for="Username">Username </label>
                    <input  type="text" name="" id="username" value={Username}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Username"/>
                </div>
                <div className="mobileNumber">
                    <label className="form__label" for="mobileNumber">Mobile </label>
                    <input  type="number" id="mobileNumber" className="form__input" value={mobileNumber} onChange = {(e) => handleInputChange(e)} placeholder="Enter Mobile Number"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} id = "submitButton" type="submit" class="btn">Submit</button>
            </div>
            <div class="footer">
                Already a user <a id = "signinLink" href="url">Log in</a>
            </div>
        </div>
       
    )       
}

export default RegistrationForm