import React, { useState, useEffect } from "react";
import authUser from "../services/authUser";
import { withAuthorization } from "../context";
import './AdminUser.css'

function AdminUser() {
  const [content, setContent] = useState();

  useEffect(() => {
    authUser.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const err = error.message;
      }
    );
  }, []);
  return (
    <div className="admin-user">
      <header>
        <span>ADMIN </span>
        <br />
        <p>
          Matthew Giles Architects A four bedroom house in London has been
          reimagined by Matthew Giles Architects with an all-natural feel in
          mind, following the owners’ wishes. The project, the transformation of
          a 1960s building, brings light and <br/>serenity into the existing
          structure, which suffered from dark spaces and clutter. Using
          minimalist architecture, light colours and strategic bespoke storage
          solutions the design team has now created a space that is both in tune
          with its residence’s life and better connected with the outdoors areas
          of the property too. Photography: Lorenzo Zandri
        </p>
      </header>
    </div>
  );
}

const condition = (signedInUser) => !!signedInUser && signedInUser.role === "ADMIN_USER";
export default withAuthorization(condition)(AdminUser);
