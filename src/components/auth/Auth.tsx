"use client";

import { useContext } from "react";
import Icon from "../icons/Icon";
import authStyle from "@/sass/auth/Auth.module.scss";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthContext } from "@/context/auth/AuthContext";

const Auth = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <>
      <div>
        <div className={`${authStyle["auth__icon"]}`}>
          <Icon name="movie" />
        </div>
        {!isAuth ? (
          <Login setIsAuth={setIsAuth} />
        ) : (
          <SignUp setIsAuth={setIsAuth} />
        )}
      </div>
    </>
  );
};

export default Auth;
