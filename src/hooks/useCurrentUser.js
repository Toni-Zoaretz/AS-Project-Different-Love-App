import { useAuthState } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth, db } from "../firebase";

const signIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

export function useCurrentUser() {
  const [userAuthData, userAuthLoading] = useAuthState(auth);
  const maybeUserUid = userAuthData?.uid ?? "FAKEUSERID";

  const [userDocument, loadingUserDocument, errorLoadingUserDocument] =
    useDocument(doc(db, "users", maybeUserUid), {
      snapshotListenOptions: { includeMetadataChanges: true },
    });

  async function updateUser(newUserData, merge = true) {
    if (!maybeUserUid) {
      throw new Error("cant update before maybeUserUid is here");
    }

    await setDoc(doc(db, "users", maybeUserUid), newUserData, { merge });
  }

  if (userAuthLoading) {
    return {
      state: "AUTH_LOADING",
    };
  }

  if (!userAuthData || !userAuthData.uid) {
    return {
      state: "NEED_LOGIN",
      signIn,
    };
  }

  if (loadingUserDocument && !userDocument) {
    return {
      state: "LOADING_USER_DATA",
      userAuthData,
      updateUser,
    };
  }

  if (!userDocument.exists()) {
    return {
      state: "USER_NEED_PROFILE",
      userAuthData,
      updateUser,
    };
  }

  const userDocumentData = userDocument.data();

  // // Sanity check
  // const mustHaveFields = [
  //   "email",
  //   "age",
  //   "gender",
  //   "status",
  //   "fullName",
  //   "smoking",
  // ];
  // if (mustHaveFields.some((f) => !userDocumentData[f])) {
  //   throw new Error("field is bad!!!!");
  // }

  if (!userDocumentData.trivia) {
    return {
      state: "USER_NEED_TRIVIA",
      userAuthData,
      updateUser,
      userDocumentData,
    };
  }

  return {
    state: "READY",
    userAuthData,
    updateUser,
    userDocumentData,
  };
}
