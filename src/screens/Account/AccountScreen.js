import React, { useState, useEffect } from "react";
import {} from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from "./UserGuestScreen";
import { UserLoggedScreen } from "./UserLoggedScreen";
import { LoginScreen } from "../Account/LoginScreen";
import { LoadingModal } from "../../components";

export function AccountScreen() {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);

      console.log("Usuario esta logeado?");
      console.log(user ? true : false);
      //console.clear();
    });
  }, []);

  if (hasLogged === null) {
    return <LoadingModal show text="Cargando" />;
  }
  //return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
}
