import React, { useState, useEffect } from "react";
import authUser from "../services/authUser";
import './CurrentUser.css'

function CurrentUser() {
  const [content, setContent] = useState();

  useEffect(() => {
    authUser.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const err = error.message;
      }
    );
  }, []);
  return (
    <div className="currentUser">
      <header>
        <span>SIMPLE</span>
        <br />
        <p>
          The redesign of thie Victorian abode in East Dulwich, South London, is
          the brainchild of Kieran Wardle Architects. The design team aimed for
          ‘multifunctionality, light and hiding the clutter,’ they explain.
          <br/>
         
          breakfast room before the kids go to school, a workspace during the
          day, a space for cooking and eating together, a sitting room during
         
          penthouse, Vancouver, Canada Leckie Studio Sitting at the top of<br/>
          
          directly to a lush, tropical garden space outside. Key improvements
          have been made to the thermal efficiency of the house by upgrading all
          the single-glazed sash windows to double-glazed, enhancing its<br/>
          sustainability credentials. For further comfort, work was undertaken
        
          significantly reduces gas consumption. Photography: Adelina Iliev.
          Additional writing: Ifeoluwa Adedeji West London Mews House designed
        
         
         st,<br/>
          open plan living space. Photography: Rory Gardiner Okinawa House,
       
         
         
        </p>
      </header>
    </div>
  );
}
export default CurrentUser;
