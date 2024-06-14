import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth/web-extension";
import { auth } from "../firebase/firebaseConfig";
import { Result } from "postcss";

function useLogin() {
  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
    } catch (error) {
      const errorMessage = error.message;
      alert("something went wrong");
    }
  };

  return { signUpWithGoogle}
}

export { useLogin };
