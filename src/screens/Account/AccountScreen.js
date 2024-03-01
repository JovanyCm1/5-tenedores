import React, { useState, useEffect } from "react";
import {} from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from "./UserGuestScreen";
import { UserLoggedScreen } from "./UserLoggedScreen";
import { LoadingModal } from "../../components";

export function AccountScreen() {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user ? true : false);
    });
  }, []);

  if (hasLogged !== null) {
    return <LoadingModal></LoadingModal>;
  }

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
}
