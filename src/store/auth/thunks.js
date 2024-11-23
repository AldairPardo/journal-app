import {
    registerUserWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        // const response = await fetch("https://api.example.com/auth", {
        //     method: "POST",
        //     body: JSON.stringify({ email, password }),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // const data = await response.json();
        // dispatch(setUser(data));
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    };
};

export const startEmailAndPasswordRegister = ({
    email,
    password,
    displayName,
}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } =
            await registerUserWithEmailAndPassword({
                email,
                password,
                displayName,
            });

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, email, displayName, photoURL }));
    };
};
