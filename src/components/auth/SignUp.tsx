import authStyles from "@/sass/auth/Auth.module.scss";
import { Dispatch, SetStateAction } from "react";

const SignUp = ({
  setIsAuth,
}: {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form className={`${authStyles["auth"]}`}>
      <h2 className={`${authStyles["auth__title"]}`}>Sign Up</h2>
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
      <input
        className={`${authStyles["auth__input"]}`}
        type="password"
        placeholder="Repeat password"
      />
      <button className={`${authStyles["auth__button"]}`}>
        Create an account
      </button>
      <div className={`${authStyles["auth__info"]}`}>
        Already have an account?
        <span
          className={`${authStyles["auth__info-2"]}`}
          onClick={() => {
            setIsAuth((e) => !e);
          }}
        >
          Login
        </span>
      </div>
    </form>
  );
};

export default SignUp;
