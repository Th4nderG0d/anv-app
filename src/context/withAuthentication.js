import {useEffect,useState} from "react";
import UserContext from './UserContext';
import authService from '../services/authService';
const withAuthentication = (Component) => {
    const WithAuthentication = (props) =>
    {
    const [signedInUser,setSignedInUser] = useState(null);
    useEffect(() => {
    authService.getCurrentUser().then (user => {  
    if(user[0]){
     setSignedInUser(user[0]);
     } else
     setSignedInUser(null);})
    },[])
    return (
        <UserContext.Provider value={signedInUser}>
            <Component {...props} />
        </UserContext.Provider>
            );
        }
    return WithAuthentication;
};
export default withAuthentication;