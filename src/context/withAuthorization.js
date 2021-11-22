import React,{useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from './UserContext';
import authService from '../services/authService';
const withAuthorization = condition => Component => {
    const  WithAuthorization = (props) => {
    useEffect(() => {
    const authUser = authService.getCurrentUser().then((user) => {
        const val = JSON.stringify(user[0]);
        console.log("val is");
        if(!val || val === null || val === '[]'){
            props.history.push("/login");
        }
    },[])

       },[])
            return (
                <UserContext.Consumer>
                    {
                        signedInUser => condition(signedInUser) ? <Component  signedInUser = {signedInUser} {...props} /> : null
                    }
                </UserContext.Consumer>
            );
    }
    return withRouter((WithAuthorization));
};
export default withAuthorization;