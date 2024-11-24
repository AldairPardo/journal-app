import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (auth) => {
    try {
        const res = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(res);
        const { displayName, email, photoURL, uid } = res.user;

        return {
            ok: true,
            //User info
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
        return {
            ok: false,
            errorMessage,
        };
    }
};

export const registerUserWithEmailAndPassword = async ({
    email,
    password,
    displayName,
}) => {
    try {
        console.log(email, password);
        const res = await createUserWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );
        const { photoURL, uid } = res.user;

        await updateProfile(FirebaseAuth.currentUser, {
            displayName,
        });

        return {
            ok: true,
            //User info
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
        return {
            ok: false,
            errorMessage,
        };
    }
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
    try {
        const res = await signInWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );
        const { displayName, photoURL, uid } = res.user;

        return {
            ok: true,
            //User info
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        const errorMessage = error.message;
        console.error(error);
        return {
            ok: false,
            errorMessage,
        };
    }
};

export const logoutFirebase = async () => {
    try {
        await FirebaseAuth.signOut();
        return {
            ok: true,
        };
    } catch (error) {
        const errorMessage = error.message;
        console.error(error);
        return {
            ok: false,
            errorMessage,
        };
    }
};