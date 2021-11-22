import React ,{useState} from 'react'
import {Redirect,Link} from 'react-router-dom'
import authService from '../services/authService'
import './Register.css'




function Register(props) {
    const [name,setName]=useState("")
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const [redirect,setRedirect]=useState(false)
    const [message,setMessage]=useState('')
    const [successful,setSuccessful]=useState(false)



     const submit=async (e)=>{
        e.preventDefault();
        
         if(true){
          authService.register(name,email,password).then((response)=>{
              console.log(response.data);},
              (error)=>{
                const message=error.message;
                setMessage(message)
                setSuccessful(true)
            }
          )
        }

        else{
            setSuccessful(false)

        }

    }
    return (
        <div id="register">
           <form className="registerContainer" onSubmit={submit}>
           {!successful && (
               <div>
            <input type="text" className="registerInpt" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/><br/>
            <input type="email" className="registerInpt" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/><br/>
            <input type="password" className="registerInpt" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/><br/>
            <Link className="links" to='/login'><button type="submit" className="registerBtn" >REGISTER</button></Link>
            <span className="txt">Already have an account ?</span>
           <Link className="links" to='/login'> <button className="registerBtn2" type="submit"  >Login</button></Link>
            <h1>{message}</h1>
            </div>)}
</form>
        </div>
    )
}

export default Register
