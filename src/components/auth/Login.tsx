import authStyles from "@/sass/auth/Auth.module.scss";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const Login = ({
  setIsAuth,
}: {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form className={`${authStyles["auth"]}`}>
      <h2 className={`${authStyles["auth__title"]}`}>Login</h2>
      <input
        className={`${authStyles["auth__input"]}`}
        type="text"
        placeholder="Email address"
        required={true}
      />
      <input
        className={`${authStyles["auth__input"]}`}
        type="password"
        placeholder="Password"
      />
      <Link href={"/home/"} className={`${authStyles["auth__button"]}`}>
        Login to your account
      </Link>
      <div className={`${authStyles["auth__info"]}`}>
        Don&apos;t have an account?{" "}
        <span
          className={`${authStyles["auth__info-2"]}`}
          onClick={() => {
            setIsAuth((e) => !e);
          }}
        >
          Sign Up
        </span>
      </div>
    </form>
  );
};

export default Login;
