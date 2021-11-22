import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context";
import authService from "../services/authService";
import { withAuthentication } from "../context";

const Navigation = (props) => {
    const logout = () => {
        authService.logout();
    }
    return(
        <nav className="appLink">
        <h1>BlazZze</h1>
        <Link className="links"  to="/welcome">Home</Link>
        <UserContext.Consumer>
            {signedInUser => !!signedInUser && signedInUser.role === "MOD_USER" ?  <li className="links">
              <Link className="links" to="/mod">Moderator Board</Link>
            </li> : <> </> }
        </UserContext.Consumer>

        <UserContext.Consumer>
            {signedInUser => !!signedInUser && signedInUser.role === "ADMIN_USER" ?   <li className="links">
              <Link className="links"  to="/admin">Admin Board</Link>
            </li> : <> </> }
        </UserContext.Consumer>
        

        <UserContext.Consumer>
            {signedInUser => !!signedInUser ?  <li className="links">
              <Link className="links" to="/user">User</Link>
            </li> : <></> }
        </UserContext.Consumer>


        <UserContext.Consumer>
          {signedInUser => !!signedInUser ? <div className="user-info">
          <h2>{signedInUser.email}</h2>
          <Link className="links" to="/login">
            <button className="appBtn" onClick  = {logout} >LogOut</button>
          </Link>
          </div>:
          <div className="log-reg">
          <Link className="links" to="/login">
            <button className="appBtn" >Login</button>
          </Link>
          <Link className="links" to="/register">
            <button className="appBtn" >Register</button>
          </Link>
          </div>
          }
          </UserContext.Consumer>
        </nav>
    );
    
}

export default withAuthentication(Navigation);